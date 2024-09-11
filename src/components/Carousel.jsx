import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import '../styles/Carousel.css'; // Import your custom CSS file

// Import images directly
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const MyCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      swipeable={true}  // Allow swipe on mobile devices
      emulateTouch={true} // Emulate touch on desktop for testing
      dynamicHeight={true}  // Allow the carousel to adjust height based on content
      className="h-[50vh] md:h-[75vh] overflow-visible" // Adjust height for mobile (50vh) and larger screens (75vh)
      renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
        hasPrev && (
          <button
            type="button"
            onClick={clickHandler}
            title={labelPrev}
            className="carousel-arrow-prev absolute z-10 text-white"
            style={{ top: '50%', left: '1rem', transform: 'translateY(-50%)' }}
          >
            &#10094;
          </button>
        )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) =>
        hasNext && (
          <button
            type="button"
            onClick={clickHandler}
            title={labelNext}
            className="carousel-arrow-next absolute z-10 text-white"
            style={{ top: '50%', right: '1rem', transform: 'translateY(-50%)' }}
          >
            &#10095;
          </button>
        )
      }
    >
      <div className="relative h-[50vh] md:h-[75vh] bg-center bg-cover" style={{ backgroundImage: `url(${image1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-1280 mx-auto p-8 relative">
            <div className="text-left text-white">
              <h2 className="mb-4 text-3xl md:text-6xl lg:text-6xl font-bold">We're Better <br /> Best of VA </h2>
              <p className="text-lg mt-4 font-bold">Delivering personalized support when you need it most.

</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] md:h-[75vh] bg-center bg-cover" style={{ backgroundImage: `url(${image2})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-1280 mx-auto p-8 relative">
            <div className="text-left text-white pl-8">
              <h2 className="mb-4 text-3xl md:text-6xl lg:text-6xl font-bold">Your Care <br /> Our Priority</h2>
              <p className="text-lg mt-4 font-bold">Helping you live life on your terms with dedicated support.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] md:h-[75vh] bg-center bg-cover" style={{ backgroundImage: `url(${image3})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-1280 mx-auto p-8 relative">
            <div className="text-left text-white pl-8">
              <h2 className="mb-4 text-3xl md:text-6xl lg:text-6xl font-bold">Empowering your <br /> Independence</h2>
              <p className="text-lg mt-4 font-bold">Partnering with VA Medicaid to Enhance Lives with Compassionate Care.</p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
