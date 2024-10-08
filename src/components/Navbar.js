import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/auth" className="text-white hover:text-gray-400">Login</Link></li>
        <li><Link to="/bookings" className="text-white hover:text-gray-400">Bookings</Link></li>
        <li><Link to="/facilities" className="text-white hover:text-gray-400">Facilities</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
