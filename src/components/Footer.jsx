import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import linkedinIcon from '../assets/linkedin.svg';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-primary py-12 px-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full border-b border-solid border-gray-300 pb-12">
          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-deep-yellow">Contact</h2>
            <p className="text-white pb-3 leading-7 font-medium">
              City of Fredericksburg Offfice
              1976 William Street <br />
              Fredericksburg, VA 44201<br></br>
              T: (540) 373-3955 <br></br>
              F: (540) 373-3956 <br></br>
              W: www.betterandbesthcare.com
            </p>
          
            <a href="mailto:jobeng@betterbesthc.com" className="text-white font-medium pb-3 underline">
              jobeng@betterbesthc.com
            </a>
            <div className="mt-6">
            <FontAwesomeIcon icon={faFacebook} className="text-white w-7 h-7 inline-block mr-2" />
            <FontAwesomeIcon icon={faTwitter} className="text-white w-7 h-7 inline-block mr-2" />
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-deep-yellow">Navigation</h2>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Home</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">About</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Services</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Careers</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Contact</Link>
          </div>

          {/* Departments Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-deep-yellow">Service Areas</h2>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Fredericksburg County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Spotsylvania County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Stafford County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Prince William County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">King George County</Link>
          </div>

          {/* More Service Areas Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-deep-yellow">More Service Areas</h2>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Culpeper County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Caroline County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Orange County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Fairfax County</Link>
            <Link to="#" className="text-white font-medium hover:text-accent hover:underline transform delay-50 pb-3 flex duration-500">Canada Ontario (540-734-9180)</Link>        
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <div>
            <p className="text-white font-medium">Better-Best Copyright 2024 © All rights reserved.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
