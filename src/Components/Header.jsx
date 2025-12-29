import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

  const menuItems = (
    <>
      <li>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-red-700 font-bold' : 'text-gray-700'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/products' className={({ isActive }) => isActive ? 'text-red-700 font-bold' : 'text-gray-700'}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-red-700 font-bold' : 'text-gray-700'}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='shadow-sm sticky top-0 bg-base-100 z-50'>
      <div className="navbar container mx-auto px-4">

        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link to='/' className="ml-2">
            <img className='w-28 h-12 sm:w-32 sm:h-14' src="../../src/assets/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-red-700 font-bold gap-4">
            {menuItems}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {/* Cart Icon */}
          <Link to='/cart' className="relative text-white hover:text-red-700 text-2xl">
            <FaShoppingCart />
          </Link>

          {/* Login Button */}
          <Link
            to='/login'
            className="btn border-2 border-red-700 text-red-700 bg-white font-bold hover:bg-red-700 hover:text-white transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="menu menu-vertical bg-base-100 text-red-700 font-bold p-4 space-y-2 shadow-lg">
            {menuItems}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
