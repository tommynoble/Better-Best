import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faTrophy, faUsers, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import faUsers

const Banner = () => {
  return (
    <div className="bg-primary py-14 hidden sm:block"> {/* Hidden on mobile, visible on sm screens and above */}
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Nurses Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <FontAwesomeIcon icon={faStethoscope} className="text-light w-8 h-8 mb-2" /> {/* Smaller icon */}
            <h2 className="text-2xl font-bold text-light">40+</h2> {/* Reduced font size */}
            <span className="text-lg text-light">Care Givers</span> {/* Changed from Doctors to Nurses */}
          </div>

          {/* Award Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <FontAwesomeIcon icon={faTrophy} className="text-light w-8 h-8 mb-2" /> {/* Smaller icon */}
            <h2 className="text-2xl font-bold text-light">5 star</h2> {/* Reduced font size */}
            <span className="text-lg text-light">Rating</span>
          </div>

          {/* Patients Section with new icon */}
          <div className="flex flex-col items-center justify-center text-center">
            <FontAwesomeIcon icon={faUsers} className="text-light w-8 h-8 mb-2" /> {/* Changed to Users icon */}
            <h2 className="text-2xl font-bold text-light">300+</h2> {/* Reduced font size */}
            <span className="text-lg text-light">Patients</span> {/* Changed from Rooms to Patients */}
          </div>

          {/* Areas Section with new icon */}
          <div className="flex flex-col items-center justify-center text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-light w-8 h-8 mb-2" /> {/* Changed to Map Marker */}
            <h2 className="text-2xl font-bold text-light">5</h2> {/* Reduced font size */}
            <span className="text-lg text-light"> Locations</span> {/* Changed to Areas */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
