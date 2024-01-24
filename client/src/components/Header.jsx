import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='ml-2 mr-2 px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Venu's</span>blog
      </Link>
    </nav>
  );
}
