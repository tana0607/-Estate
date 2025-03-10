import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Contact({ listing }) {
  const { currentUser } = useSelector((state) => state.user);
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('/api/auth/contact', {
        userEmail: currentUser.email, // Assuming you store the logged-in user's email in localStorage
        username: currentUser.username, // Assuming you store the logged-in user's username in localStorage
        message,
        listing: listing.name,
        landlordEmail: landlord.email,
      });

      if (response.data.success) {
        setSuccess(true);
        setMessage('');
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <button
            onClick={handleSendMessage}
            disabled={loading}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
          {success && (
            <p className='text-green-500 text-sm mt-2'>
              Message sent successfully!
            </p>
          )}
        </div>
      )}
    </>
  );
}