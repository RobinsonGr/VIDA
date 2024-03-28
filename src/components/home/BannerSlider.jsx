import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <> 
      <style jsx>{`
        .banner-container {
          max-width: 1280px; 
          width: 100%;       
          margin: 0 auto; 
        }

        .banner-container img { 
          width: 100%;   
          height: auto;  
          object-fit: cover; 
        }
      `}</style>

      <div className="banner-container"> 
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/NWg311f/Are-you-a-store-2.png" alt="Banner 1" />
          </div>
          <div>
            <img src="https://i.ibb.co/NWg311f/Are-you-a-store-2.png" alt="Banner 2" />
          </div>
          {/* Add more banner slides as needed */}
        </Slider>
      </div> 
    </>
  );
};

export default BannerSlider;
