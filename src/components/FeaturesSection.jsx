import React from 'react';
import { Link } from 'react-router-dom'; 
import featureImage from '../assets/feature-image.jpg'; 
import featureImage2 from '../assets/feature-image2.jpg'; 
import Banner from '../components/banner'; // Import the Banner component

const FeaturesSection = () => {
  return (
    <>
      {/* Banner Section at the top */}
      <Banner />

      {/* First Feature Section */}
      <div className="py-12 bg-light-yellow ">
        <div className="container max-w-1280 mx-auto flex flex-col md:flex-row items-center p-4 max-sm:m-4">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={featureImage} alt="Feature" className="w-full h-auto rounded-md shadow-md mb-8 mt-10" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Compassionate Care </h1>
            <p className="text-lg text-dark mb-6">
              Our dedicated caregivers provide warmth, comfort, and attentive support to ensure that every moment is filled with dignity and love. Trust us to be there when it matters most, offering expert care with a personal touch.
            </p>
            <div className="flex space-x-4">
              <Link to="/apply-for-care">
                <button className="bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-primary-dark transform hover:scale-105 active:scale-95 transition duration-300">
                  Apply for Care
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-transparent border-2 border-primary text-primary py-2 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transform hover:scale-105 active:scale-95 transition duration-300">
                  Explore our services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Feature Section */}
      <div className="py-12 bg-white">
        <div className="container max-w-1280 mx-auto flex flex-col md:flex-row items-center p-4 mb-8 mt-4 max-sm:m-4">
          <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
            <h1 className="text-4xl font-bold text-primary mb-4">Dedicated Staff</h1>
            <p className="text-lg text-dark mb-6">
              Explore our unique features that set us apart in the industry. We combine innovation with expertise to deliver exceptional solutions tailored to your needs, ensuring your business thrives in a competitive market.
            </p>
            <div className="flex space-x-4">
              <Link to="/apply-for-care">
                <button className="bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-primary-dark transform hover:scale-105 active:scale-95 transition duration-300">
                  Apply for Care
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-transparent border-2 border-primary text-primary py-2 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transform hover:scale-105 active:scale-95 transition duration-300">
                  Explore our Services
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
            <img src={featureImage2} alt="Feature" className="w-full h-auto rounded-md shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
