import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SiteMap from '../components/SiteMap';
import Container from '../components/Container';  // Import the Container component
import visionMissionImage from '../assets/vision-mission.jpg'; // Import the image

const About = () => {
  return (
    <div>
      {/* SEO Metadata using React Helmet */}
      <Helmet>
        <title>About Us - Leading Home Care Services | Better & Best Healthcare</title>
        <meta
          name="description"
          content="Learn more about Better & Best Healthcare, a trusted provider of in-home health care services for over 10 years. We are committed to compassionate, personalized care that enhances the quality of life for individuals."
        />
        <meta
          name="keywords"
          content="About us, In-home care, Healthcare services, Personalized care, Compassionate care"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://betterandbesthcare.com/about" />
      </Helmet>

      <Navbar />

      {/* Wrap content in the Container component */}
      <Container>
        <SiteMap />
        <div className="mb-7 max-sm:m-10">
          <h1 className="text-5xl font-bold text-primary mb-4">About Us</h1>
          <p className="mt-4 text-lg text-dark leading-relaxed">
            For over 10 years, The Better Best has proudly served the DMV and surrounding areas, delivering high-quality services tailored to the diverse needs of our clients. Our dedicated team of skilled professionals is committed to providing personalized 
            in-home health care, ensuring you or your loved ones can live comfortably and independently.
          </p>
        </div>
      </Container>

      {/* Vision and Mission Section with Image */}
      <div className="vision-mission px-10 py-10" style={{ background: "url('/static/img/about-us-background.jpg') no-repeat center center/cover" }}>
        <Container>
          <div className="grid lg:grid-cols-6 gap-8">
            <div className="col-span-6 lg:col-span-3">
              <h4 className="font-bold text-4xl pb-4 text-primary">Our Vision</h4>
              <p className="text-lg pb-16 text-dark leading-8 lg:pr-12 border-b border-dark-green mb-16">
                To be the leading provider of compassionate, personalized in-home health care services, empowering individuals to live with dignity, independence, and the highest quality of life in the comfort of their own homes. We strive to set the standard for excellence in 
                care by continuously innovating and adapting to the evolving needs of our clients and the communities we serve.
              </p>
              <h4 className="font-bold text-4xl pb-4 text-primary">Our Mission</h4>
              <p className="text-lg text-dark leading-8 lg:pr-12 pb-8">
                Our mission is to enhance the quality of life for our clients by delivering compassionate, reliable, and expert care right where it matters most.
              </p>
            </div>
            {/* Image Section */}
            <div className="col-span-6 lg:col-span-3 flex items-center">
              <img src={visionMissionImage} alt="Vision and Mission" className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </Container>
      </div>

      {/* Staff Section with modern touch */}
      <div className="bg-white py-10 max-sm:m-10 ">
        <Container>
          <h2 className="text-4xl font-bold text-primary mb-12 text-center ">Meet Our Team</h2>
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            <div className="team-member">
              <p className="text-2xl font-semibold text-primary mb-2">Bs HA, Ms Joseph Obeng NM</p>
              <p className="text-black-500 mb-4">Administrator</p>
              <hr className="border-dark-green mb-4"/>
              <p className="text-gray-700">A highly experienced administrator overseeing daily operations and ensuring top-tier care is delivered to our clients.</p>
            </div>

            <div className="team-member">
              <p className="text-2xl font-semibold text-primary mb-2">Lawrencia Hemeng [ BSN, RN ]</p>
              <p className="text-black-300 mb-4">Director Of Nursing</p>
              <hr className="border-dark-green mb-4"/>
              <p className="text-gray-700">Leading the nursing team with a passion for providing exceptional health services and compassionate care.</p>
            </div>

            <div className="team-member">
              <p className="text-2xl font-semibold text-primary mb-2">Doris Adavor [ RN ]</p>
              <p className="text-black-300 mb-4">Director Of Operations</p>
              <hr className="border-dark-green mb-4"/>
              <p className="text-gray-700">Bringing expertise to our operational processes, ensuring everything runs smoothly and efficiently for our clients.</p>
            </div>

            <div className="team-member">
              <p className="text-2xl font-semibold text-primary mb-2">Afia Obeng [ RN ]</p>
              <p className="text-black-300 mb-4">Nursing / Office Manager</p>
              <hr className="border-dark-green mb-4"/>
              <p className="text-gray-700">A dedicated professional balancing nursing duties and office management to deliver quality service.</p>
            </div>

            <div className="team-member">
              <p className="text-2xl font-semibold text-primary mb-2">Mariam Mubangu [ CNA / DSP ]</p>
              <p className="text-black-300 mb-4">Field Nurse</p>
              <hr className="border-dark-green mb-4"/>
              <p className="text-gray-700">A compassionate field nurse providing hands-on care to clients and ensuring their needs are met with professionalism.</p>
            </div>

            <div className="team-member">
              <p className="text-2xl font-semibold text-primary mb-2">Christina Timme [ CNA / DSP ]</p>
              <p className="text-black-300 mb-4">Field Nurse</p>
              <hr className="border-dark-green mb-4"/>
              <p className="text-gray-700">Delivering high-quality care in the field, ensuring client satisfaction and well-being at all times.</p>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default About;
