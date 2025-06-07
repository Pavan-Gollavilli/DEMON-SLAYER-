import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import Logo from '/assets/kimetsu-no-yaiba-logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-700 via-black to-purple-800 p-4 text-white">
      <div className="w-full px-4 md:max-w-7xl md:mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={Logo} alt="Demon Slayer Logo" className="w-12 h-12" />
          </Link>
            <h1 className="text-3xl sm:text-4xl tracking-wider font-semibold 
">
              DEMON SLAYER
            </h1>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-[#FFC0CB]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFC0CB]">
              About
            </Link>
          </li>
          <li>
            <Link to="/characters" className="hover:text-[#FFC0CB]">
              Characters
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FFC0CB]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle (Boxicons) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl"
          >
            {isOpen ? (
              <i className="bx bx-x" /> // close icon
            ) : (
              <i className="bx bx-menu" /> // hamburger icon
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-lg font-medium px-4">
          <Link to="/" className="block hover:text-black">
            Home
          </Link>
          <Link to="/about" className="block hover:text-black">
            About
          </Link>
          <Link to="/characters" className="block  hover:text-black">
            Characters
          </Link>
          <Link to="/contact" className="block  hover:text-black">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
