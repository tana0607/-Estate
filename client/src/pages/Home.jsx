import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { Search, Home, TrendingUp, MapPin } from 'lucide-react';
import ListingItem from '../components/ListingItem';
import myimage from '../assets/urban.jpg';

export default function Homes() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation, Autoplay, EffectFade]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[85vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Swiper
          navigation
          effect="fade"
          autoplay={{ delay: 3000 }}
          className="h-full"
        >
          {offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${myimage}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className="h-full"
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find your next <span className="text-blue-400">perfect</span>
              <br />place with ease
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Urban Estate is the best place to find your next perfect place to live.
              We have a wide range of properties for you to choose from.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Start Your Search
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Browse through thousands of properties that match your criteria</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="text-gray-600">Find the most competitive prices and exclusive offers</p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">Discover properties in the most sought-after neighborhoods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Recent Offers */}
        {offerListings && offerListings.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800">Featured Offers</h2>
              <Link 
                to="/search?offer=true"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                View all offers →
              </Link>
            </div>
            <div className="grid lg:gap-80 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Rent Listings */}
        {rentListings && rentListings.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800">For Rent</h2>
              <Link 
                to="/search?type=rent"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                View all rentals →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Sale Listings */}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800">For Sale</h2>
              <Link 
                to="/search?type=sale"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                View all properties →
              </Link>
            </div>
            <div className="grid lg:gap-80 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}