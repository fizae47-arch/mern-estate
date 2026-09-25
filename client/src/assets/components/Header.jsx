import {FaSearch, FaHome} from 'react-icons/fa';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-teal-700 shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex items-center gap-2 tracking-tight'>
            <span className='bg-white/15 text-white rounded-md p-1.5 flex items-center justify-center'>
              <FaHome className='text-sm sm:text-base' />
            </span>
            <span className='flex flex-wrap'>
              <span className='text-white'>Fiza</span>
              <span className='text-teal-200'>Estate</span>
            </span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className='bg-white/90 p-3 rounded-lg flex items-center focus-within:ring-2 focus-within:ring-teal-300 transition-all'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-slate-700 placeholder:text-slate-400 text-sm'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-teal-600 hover:text-teal-700 transition-colors'/>
          </button>
        </form>

        <ul className='flex gap-5 items-center'>
          <Link to='/'>
            <li className='hidden sm:inline text-teal-50 font-medium hover:text-white transition-colors'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-teal-50 font-medium hover:text-white transition-colors'>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-9 w-9 object-cover ring-2 ring-white/70 hover:ring-white transition-all'
                src={currentUser.avatar}
                alt='profile'
                referrerPolicy='no-referrer'
              />
            ) : (
              <li className='text-teal-50 font-medium hover:text-white transition-colors'>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}