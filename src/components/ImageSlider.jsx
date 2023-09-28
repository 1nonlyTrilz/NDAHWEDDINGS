import React, { useEffect, useState } from 'react';
import './styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(30); // Default value

  useEffect(() => {
    const updateCenterSlidePercentage = () => {
      if (window.innerWidth > 1024) {
        setCenterSlidePercentage(30);
      } else if(window.innerWidth <= 1024 && window.innerWidth > 900) {
        setCenterSlidePercentage(40);
      } else if(window.innerWidth <= 765){
        setCenterSlidePercentage(70)
      }
    };

    updateCenterSlidePercentage();

    window.addEventListener('resize', updateCenterSlidePercentage);

    return () => {
      window.removeEventListener('resize', updateCenterSlidePercentage);
    };
  }, []);

  const handleSlideChange = index => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Carousel
        showThumbs={false}
        dynamicHeight={false}
        centerSlidePercentage={centerSlidePercentage}
        centerMode={true}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        interval={3000}
        autoPlay={true}
        showArrows={window.innerWidth>900? true : false}
        verticalSwipe='vertical'
        swipeScrollTolerance={20}
        preventMovementUntilSwipeScrollTolerance={true}
        className=''
      >
        {images.map((image, index) => (
        <div className='h-[600px] flex items-center justify-center'>
          <div key={index} className={`w-80 flex overflow-hidden object-cover items-center justify-center h-[400px] max-sm:w-64 ease-in-out mx-auto my-auto duration-700 ${ currentSlide === index? ' scale-125 z-10':' scale-100' }`}>
            <img src={image} alt={`Image ${index + 1}`} className=' h-full w-full object-cover'/>
          </div>
        </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
