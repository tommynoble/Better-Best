import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import '../styles/carousel.css'; // Import your custom CSS file

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
      className="h-[75vh]" // Adjust the height of the carousel
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
      <div className="relative h-[75vh] bg-center bg-cover" style={{ backgroundImage: `url(${image1})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-45  "></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="container max-w-1280 mx-auto p-8 relative">
      <div className="text-left text-white">
        <h2 className=" mb-4 text-4xl md:text-6xl lg:text-6xl font-bold">Look no Further <br /> For help</h2>
        <p className="text-lg mt-4 font-bold">We work with Medicaid</p>
       
       {/*  <button className="text-lg mt-9 bg-primary text-white py-3 px-8 rounded-lg font-semibold border-2 border-transparent hover:bg-lime-800 hover:text-white  hover:border-primary hover:shadow-lg transition duration-300 ease-in-out">
  Apply for Care
</button> */}
      

      </div>
    </div>
  </div>
</div>

      <div className="relative h-[75vh] bg-center bg-cover" style={{ backgroundImage: `url(${image2})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-1280 mx-auto p-8 relative">
            <div className="text-left text-white pl-8">
            <h2 className=" mb-4 text-4xl md:text-6xl lg:text-6xl font-bold">We're Better <br /> Best of VA</h2>
            
            <p className="text-lg mt-4 font-bold">We work with Medicaid</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[75vh] bg-center bg-cover" style={{ backgroundImage: `url(${image3})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-1280 mx-auto p-8 relative">
            <div className="text-left text-white pl-8">
            <h2 className=" mb-4 text-4xl md:text-6xl lg:text-6xl font-bold">We work with  <br /> VA Medicaid </h2>
            
              <p className="text-lg mt-4 font-bold">We work with Medicaid</p>
             
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
