import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import SiteMap from '../components/SiteMap';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';  // Import checkmark icon

const ServicesPage = () => {
  return (
    <div>
      {/* SEO Metadata using React Helmet */}
      <Helmet>
        <title>Our Services - Comprehensive Healthcare Solutions | Better & Best Healthcare</title>
        <meta
          name="description"
          content="Explore our comprehensive range of healthcare services, including skilled nursing, personal care, companion care, and respite care. Better & Best Healthcare provides tailored solutions to meet your medical and non-medical needs."
        />
        <meta
          name="keywords"
          content="Healthcare services, Skilled nursing, Personal care, Companion care, Respite care, Medical services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://betterandbesthcare.com/services" />
      </Helmet>

      {/* Navbar Component */}
      <Navbar />

      <Container>
        <SiteMap />

        {/* Main Content Area for Services */}
        <div className="container max-w-1280 mx-auto p-4 mt-8">
          <h1 className="text-5xl font-extrabold text-primary text-center max-sm:text-4xl  mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore a comprehensive range of homecare services designed to meet your individual needs. 
          </p>
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Medical Services */}
        <div className="container max-w-1280 mx-auto p-8 mt-16 mb-12">
          <h2 className="text-4xl font-bold text-primary max-sm:text-3xl mb-4">Medical Services</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We provide a full spectrum of medical services to ensure you receive the highest quality care. From reliable transportation to expert skilled nursing, we address all your healthcare needs with precision and dedication.          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skilled Nursing Care */}
            <div className="p-6 border border-primary-light rounded-lg shadow-lg hover:bg-primary-light transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-primary mb-4">Skilled Nursing</h3>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Wound care and dressing changes
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Medication administration
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Monitoring vital signs
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Tube Feeding
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Ostomy Care
                </li>
              </ul>
            </div>

            {/* Personal Care */}
            <div className="p-6 border border-secondary-light rounded-lg shadow-lg hover:bg-secondary-light transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-primary mb-4">PDN</h3>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Wound care and dressing changes
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Medication administration
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Monitoring vital signs
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Tube Feeding
                </li>
              </ul>
            </div>
          </div>

          {/* Non-Medical Services */}
          <h2 className="text-4xl font-bold text-primary mb-4 max-sm:text-3xl mt-16">Non-Medical Services</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our non-medical care services are thoughtfully designed to improve quality of life by offering assistance with daily activities and promoting independence.          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Companion Care */}
            <div className="p-6 border border-primary-light rounded-lg shadow-lg hover:bg-primary-light transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-primary mb-4">Companion Care</h3>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Conversation and socialization
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Assistance with hobbies and activities
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Accompaniment to appointments and outings
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
                  Light housekeeping and meal preparation
                </li>
              </ul>
            </div>

            {/* Respite Care */}
            <div className="p-6 border border-accent-light rounded-lg shadow-lg hover:bg-accent-light transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-primary mb-4">Respite Care</h3>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Short term relief for primary care givers
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Overnight or daytime support
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Emergency or planned respite
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Professional care services for loved ones
                </li>
              </ul>
            </div>

            <div className="p-6 border border-accent-light rounded-lg shadow-lg hover:bg-accent-light transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-primary mb-4">Personal Care</h3>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Activities of Daily Living
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Bathing and Grooming Assistants
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Dressing and Toileting support
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Mobility Assistance and transfers
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="text-accent mr-2" />
                  Medication Reminders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
