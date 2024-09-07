import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../components/Container';  // Import the Container component

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
    <nav className="bg-primary p-4">
      <Container>  {/* Wrap the content in the Container component */}
        <div className="flex justify-between items-center">
          {/* SVG Logo linked to Home */}
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-12 w-auto">
              <path fill="#FFD43B" d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l320.4 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0zM256 208c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z"/>
            </svg>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/about" 
              className={`text-lg  text-white hover:text-accent transition-colors duration-300 ${isActive('/about') ? 'underline' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-lg  text-white hover:text-accent transition-colors duration-300 ${isActive('/services') ? 'underline' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/apply-for-care"  // Updated path
              className={`text-lg  text-white hover:text-accent transition-colors duration-300 ${isActive('/apply-for-care') ? 'underline' : ''}`}  // Updated class
            >
      Apply for Care
            </Link>
            <Link 
              to="/careers" 
              className="text-lg bg-deep-yellow text-primary py-2 px-4 rounded-lg font-semibold hover:bg-deep-yellow-light transition-all duration-300 transform hover:scale-105"
            >
              Careers
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <Link to="/about" className="block text-white hover:bg-secondary p-2">About</Link>
            <Link to="/services" className="block text-white hover:bg-secondary p-2">Services</Link>
            <Link to="/apply-for-care" className="block text-white hover:bg-secondary p-2">Apply for Care</Link> {/* Updated path and text */}
            <Link to="/careers" className="block bg-deep-yellow text-dark-green py-2 px-4 rounded-lg font-semibold hover:bg-deep-yellow-light transition-all duration-300 transform hover:scale-105">Careers</Link>
          </div>
        )}
      </Container> {/* End of Container */}
    </nav>
  );
};

export default Navbar;
