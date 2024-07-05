import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
      <Link to="/" className="text-white text-2xl font-bold">Movie Search App</Link>
    </nav>
  );
};

export default Navbar;
