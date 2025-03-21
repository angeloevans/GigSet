import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <Link 
            to="/" 
            className="text-2xl font-extrabold text-indigo-500 hover:text-indigo-400"
          >
            GigSet
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="navbar-center flex flex-1 justify-center space-x-6">
          <li>
            <Link 
              to="/import-songs" 
              className="text-lg font-medium text-white hover:text-indigo-400 transition duration-300"
            >
              Add Songs
            </Link>
          </li>
          <li>
            <Link 
              to="/playlist" 
              className="text-lg font-medium text-white hover:text-indigo-400 transition duration-300"
            >
              Playlist
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
