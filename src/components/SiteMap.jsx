import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SiteMap = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="py-4 p-4 mb-7 mt-7 max-sm:m-4"> {/* Adjust py-8 to use your custom spacing */}
      <div className="container mx-auto">
        <nav className="text-primary text-sm font-medium">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-yellow-300' : 'hover:underline'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-yellow-400' : 'hover:underline'}`}
              >
                About
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`${isActive('/services') ? 'text-deep-yellow' : 'hover:underline'}`}
              >
                Services
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link 
                to="/careers" 
                className={`${isActive('/careers') ? 'text-yellow-400' : 'hover:underline'}`}
              >
                Careers
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <a 
                href="http://localhost:5173/apply-for-care"
                className={`hover:underline ${isActive('/apply-for-care') ? 'text-yellow-400' : 'hover:text-yellow-300'}`}
              >
                Apply for Care
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default SiteMap;
