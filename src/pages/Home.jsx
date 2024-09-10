import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyCarousel from '../components/Carousel';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import Container from '../components/Container';

const Home = () => {
  return (
    <div>
      {/* SEO Metadata using React Helmet */}
      <Helmet>
        <title>Home - Compassionate Home Care Services | Better & Best Healthcare</title>
        <meta
          name="description"
          content="Better & Best Healthcare offers compassionate home care services, including medical assistance, companionship, and support with daily activities."
        />
        <meta
          name="keywords"
          content="Home care, Healthcare services, Medical assistance, Companionship, Daily activities support"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://betterandbesthcare.com/" />
      </Helmet>

      {/* Navbar Component */}
      <Navbar />

      {/* Carousel Component */}
      <MyCarousel />

      <Container>
        {/* Welcome Section */}
        <div className="container max-w-1280 mx-auto p-4 mt-8 text-center">
          <h1 className="text-3xl font-bold text-primary   ">Compassionate Home, Right at Home.</h1>
          <p className="mt-4 text-xl text-gray-600">
          
Whether you need assistance with daily activities, specialized medical care, or compassionate companionship,<br></br> we are committed to providing unwavering support at every stage of your journey.


          </p>
        </div>

        {/* Services Section */}
        <div className="container max-w-1280 mx-auto p-4 mt-8 mb-16">
          <ServicesSection />
        </div>
      </Container>

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
