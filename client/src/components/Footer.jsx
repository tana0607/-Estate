import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* About Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Prime Property Finder</h3>
            <p className='text-gray-400'>
              Your trusted partner in finding the perfect property. We specialize in buying, selling, and renting premium properties tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='/' className='text-gray-400 hover:text-white transition duration-300'>
                  Home
                </a>
              </li>
              <li>
                <a href='/listings' className='text-gray-400 hover:text-white transition duration-300'>
                  Listings
                </a>
              </li>
              <li>
                <a href='/about' className='text-gray-400 hover:text-white transition duration-300'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/contact' className='text-gray-400 hover:text-white transition duration-300'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='/privacy-policy' className='text-gray-400 hover:text-white transition duration-300'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Contact Us</h3>
            <ul className='space-y-2 text-gray-400'>
              <li className='flex items-center space-x-2'>
                <FaMapMarkerAlt className='text-white' />
                <span>123 Prime Street, Property City, Country</span>
              </li>
              <li className='flex items-center space-x-2'>
                <FaEnvelope className='text-white' />
                <span>info@primepropertyfinder.com</span>
              </li>
              <li className='flex items-center space-x-2'>
                <FaPhoneAlt className='text-white' />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Stay Updated</h3>
            <p className='text-gray-400'>
              Subscribe to our newsletter for the latest property listings and exclusive offers.
            </p>
            <form className='flex space-x-2'>
              <input
                type='email'
                placeholder='Your email'
                className='p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1'
              />
              <button
                type='submit'
                className='p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='border-t border-gray-800 mt-8 pt-8 flex justify-center space-x-6'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition duration-300'
          >
            <FaFacebook size={24} />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition duration-300'
          >
            <FaTwitter size={24} />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition duration-300'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition duration-300'
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className='text-center text-gray-400 mt-8'>
          &copy; {new Date().getFullYear()} Prime Property Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 