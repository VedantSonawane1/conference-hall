import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/auth">Login</Link></li>
        <li><Link to="/bookings">My Bookings</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
