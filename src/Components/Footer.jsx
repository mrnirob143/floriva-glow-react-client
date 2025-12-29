import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-red-700 mt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-700">Floriva Glow</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Premium skincare crafted with care for your daily glow.
          </p>
          {/* Social Icons as Links */}
          <div className="flex gap-3 mt-4 text-red-700">
            <Link to="/facebook" className="hover:text-red-800 transition">
              <FaFacebookF />
            </Link>
            <Link to="/instagram" className="hover:text-red-800 transition">
              <FaInstagram />
            </Link>
            <Link to="/twitter" className="hover:text-red-800 transition">
              <FaTwitter />
            </Link>
            <Link to="/linkedin" className="hover:text-red-800 transition">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-700">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            <li><Link to="/" className="hover:text-red-700 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-red-700 transition">Products</Link></li>
            
            <li><Link to="/contact" className="hover:text-red-700 transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-red-700 transition">Login</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-700">Support</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
            <li><Link to="/faq" className="hover:text-red-700 transition">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-red-700 transition">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-red-700 transition">Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-red-700 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-700">Contact</h3>
          <p className="text-gray-700 text-sm sm:text-base">Email: info@florivaglow.com</p>
          <p className="text-gray-700 text-sm sm:text-base">Phone: +880 123 456 789</p>
          <p className="text-gray-700 text-sm sm:text-base mt-2">Address: 123 Skincare Lane, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-red-700 mt-6 text-center text-gray-500 text-xs sm:text-sm py-4">
        © 2025 Floriva Glow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
