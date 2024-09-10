import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faHome, faHandsHelping, faHeart } from '@fortawesome/free-solid-svg-icons';

import Container from '../components/Container';  // Import the Container component

const ServicesSection = () => {
  return (
    <Container> {/* Wrap everything in the Container component */}
      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4 mb-2 max-sm:p-6  ">
  <div className="w-full h-60 border-2 border-primary rounded-lg flex flex-col items-center justify-center p-4 mb-4 hover:bg-opacity-30 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <FontAwesomeIcon icon={faUserShield} className="text-primary text-5xl mb-2 transition-colors duration-300 ease-in-out" />
    <p className="text-dark font-bold mt-2 transition-colors duration-300 ease-in-out">Skilled Nursing</p>
  </div>
  
  <div className="w-full h-60 border-2 border-secondary rounded-lg flex flex-col items-center justify-center p-4 mb-4 hover:bg-secondary-light hover:bg-opacity-20 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <FontAwesomeIcon icon={faHome} className="text-secondary text-5xl mb-2 transition-colors duration-300 ease-in-out" />
    <p className="text-dark font-bold mt-2 transition-colors duration-300 ease-in-out">Respite Care</p>
  </div>
  
  <div className="w-full h-60 border-2 border-accent rounded-lg flex flex-col items-center justify-center p-4 mb-4 hover:bg-accent-light hover:bg-opacity-20 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <FontAwesomeIcon icon={faHandsHelping} className="text-accent text-5xl mb-2 transition-colors duration-300 ease-in-out" />
    <p className="text-dark font-bold mt-2 transition-colors duration-300 ease-in-out">Personal Care</p>
  </div>
  
  <div className="w-full h-60 border-2 border-primary rounded-lg flex flex-col items-center justify-center p-4 mb-4 hover:bg-primary-light hover:bg-opacity-20 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <FontAwesomeIcon icon={faHeart} className="text-primary text-5xl mb-2 transition-colors duration-300 ease-in-out" />
    <p className="text-dark font-bold mt-2 transition-colors duration-300 ease-in-out">Companion Care</p>
  </div>
</div>

    </Container>
  );
};

export default ServicesSection;
