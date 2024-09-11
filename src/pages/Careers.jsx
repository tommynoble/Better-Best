import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHandHoldingHeart, faStethoscope, faCheck } from '@fortawesome/free-solid-svg-icons';
import SiteMap from '../components/SiteMap';

const CareersPage = () => {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      <Container>
        <SiteMap />
      </Container>

      <Container>
        <div className="container mx-auto py-10 max-sm:pd-6  max-sm:p-8 ">
          <div className="flex flex-wrap">
            <h2 className="w-full text-primary text-3xl md:text-4xl font-bold text-center max-sm:text-3xl ">Current Openings</h2>
           
          </div>
          <div className="grid grid-cols-6 gap-8 mt-4 sm:pd-6 ">
            <div className="text-center col-start-2 col-span-4">
              <p className="text-gray-700 text-lg leading-8 max-sm:text-md">
                Be part of something amazing! Together, we create lasting change and make a difference every day. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
            <div className="border border-solid border-gray-400 p-6 items-start">
              <FontAwesomeIcon icon={faUsers} className="text-primary text-4xl mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-center">Companion Care Provider</h3>
              <p className="text-center text-gray-600 mt-2">
                Provide companionship and emotional support to clients, assist with daily activities, and help maintain a positive living environment.
              </p>
              <p className="text-center text-gray-600 mt-2 font-semibold">
                Location: All services areas<br />
                Type: Full-Time
              </p>
            </div>

            <div className="border border-solid border-gray-400 p-6 items-start">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="text-primary text-4xl mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-center">Personal Care Assistant</h3>
              <p className="text-center text-gray-600 mt-2">
                Assist clients with personal hygiene, grooming, and other personal care tasks to ensure their comfort and well-being.
              </p>
              <p className="text-center text-gray-600 mt-2 font-semibold">
                Location: All services areas<br />
                Type: Full-Time
              </p>
            </div>

            <div className="border border-solid border-gray-400 p-6 items-start">
              <FontAwesomeIcon icon={faStethoscope} className="text-primary text-4xl mx-auto" />
              <h3 className="text-xl font-bold mt-4 text-center">Skilled Nursing Care Provider</h3>
              <p className="text-center text-gray-600 mt-2">
                Deliver specialized nursing care to clients with medical needs, including medication administration, wound care, and monitoring of vital signs.
              </p>
              <p className="text-center text-gray-600 mt-2 font-semibold">
                Location: All services areas<br />
                Type: Full-Time
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 gap-4 mt-12">
          

            <div className="mt-6 leading-8">
              <h4 className="text-lg font-semibold mb-4">Qualification</h4>
              <p className="text-gray-600 text-md">
                <FontAwesomeIcon icon={faCheck} className="mr-2 w-4 inline" />
                Relevant qualification based on the job role and experience.
              </p>
              <p className="text-gray-600 text-md">
                <FontAwesomeIcon icon={faCheck} className="mr-2 w-4 inline" />
                Experience in a similar role is preferred.
              </p>
              <p className="text-gray-600 text-md">
                <FontAwesomeIcon icon={faCheck} className="mr-2 w-4 inline" />
                Certifications or specializations if required.
              </p>
            </div>

            {/* JotForm Iframe Embed */}
            <div className="w-full py-0">
              <iframe
                id="JotFormIFrame-242502148322143"
                title="Employment Application Form"
                onLoad="window.parent.scrollTo(0,0)"
                allowTransparency="true"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://form.jotform.com/242502148322143"
                frameBorder="0"
                style={{ width: '100%', height: '2600px', border: 'none' }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default CareersPage;
