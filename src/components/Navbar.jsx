import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../components/Container';  // Import the Container component
import logo from '../assets/logo.svg';  // Import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary p-4 md:p-6"> {/* Added responsive padding */}
      <Container> {/* Wrap the content in the Container component */}
        <div className="flex justify-between items-center">
          {/* Logo Image linked to Home */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto md:h-20" /> {/* Adjusted height for mobile and desktop */}
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/about" 
              className={`text-base font-bold text-white  hover:text-accent hover-transition-colors duration-300 ${isActive('/about') ? 'underline' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-base font-bold text-white  hover:text-accent transition-colors duration-300 ${isActive('/services') ? 'underline' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/apply-for-care"  // Updated path
              className={`text-base font-bold text-white  hover:text-accent transition-colors duration-300 ${isActive('/apply-for-care') ? 'underline' : ''}`}  // Updated class
            >
              Apply for Care
            </Link>
            <Link 
              to="/careers" 
              className="text-base font-bold bg-deep-yellow text-dark-green py-2 px-4 rounded-lg font-semibold hover:bg-deep-yellow-light transition-all duration-300 transform hover:scale-105"
            >
              Careers
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2"> {/* Added top margin and spacing between links */}
            <Link to="/about" className="block w-1/2 text-white hover:bg-secondary p-2  rounded-lg">About</Link>
            <Link to="/services" className="block w-1/2 text-white hover:bg-secondary p-2  rounded-lg">Services</Link>
            <Link to="/apply-for-care" className="block w-1/2 text-white hover:bg-secondary p-2   rounded-lg">Apply for Care</Link> {/* Updated path and text */}
            <Link to="/careers" className="block w-1/2 bg-deep-yellow text-dark-green py-2 px-4 rounded-lg font-semibold hover:bg-deep-yellow-light transition-all duration-300 transform hover:scale-105">Careers</Link>
          </div>
        )}
      </Container> {/* End of Container */}
    </nav>
  );
};

export default Navbar;
