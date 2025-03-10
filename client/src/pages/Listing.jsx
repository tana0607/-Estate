import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import Contact from '../components/Contact';
import { MdDiscount } from 'react-icons/md';

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className='h-[550px]'
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
            <FaShare
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
              Link copied!
            </p>
          )}
          <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8'>
            <p className='text-3xl font-bold text-gray-800 mb-2'>
              {listing.name}
            </p>
            <p className='text-xl font-semibold text-gray-700 mb-4'>
              ₹{' '}
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-US')
                : listing.regularPrice.toLocaleString('en-US')}
              {listing.type === 'rent' && ' / month'}
            </p>

            {/* Address */}
            <div className='flex items-center gap-2 text-gray-600 mb-6'>
              <FaMapMarkerAlt className='text-green-600' />
              <p className='text-sm'>{listing.address}</p>
            </div>

            {/* Listing Type and Offer Badges */}
            <div className='flex gap-4 mb-6'>
              <p className='bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full'>
                {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
              </p>
              {listing.offer && (
                <p className='bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1'>
                  <MdDiscount className='text-lg' />
                  ₹{+listing.regularPrice - +listing.discountPrice} OFF
                </p>
              )}
            </div>

            {/* Description */}
            <p className='text-gray-700 mb-6'>
              <span className='font-semibold text-gray-800'>Description:</span>{' '}
              {listing.description}
            </p>

            {/* Features */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
              <div className='flex items-center gap-2 text-gray-700'>
                <FaBed className='text-xl text-blue-600' />
                <span>
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} beds`
                    : `${listing.bedrooms} bed`}
                </span>
              </div>
              <div className='flex items-center gap-2 text-gray-700'>
                <FaBath className='text-xl text-blue-600' />
                <span>
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} baths`
                    : `${listing.bathrooms} bath`}
                </span>
              </div>
              <div className='flex items-center gap-2 text-gray-700'>
                <FaParking className='text-xl text-blue-600' />
                <span>{listing.parking ? 'Parking' : 'No Parking'}</span>
              </div>
              <div className='flex items-center gap-2 text-gray-700'>
                <FaChair className='text-xl text-blue-600' />
                <span>{listing.furnished ? 'Furnished' : 'Unfurnished'}</span>
              </div>
            </div>

            {/* Contact Landlord Button */}
            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300'
              >
                Contact Landlord
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </div>
      )}
    </main>
  );
}
