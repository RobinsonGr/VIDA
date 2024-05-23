import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import SliderArrow from './SliderArrow';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SliderArrow to="prev"/>,
    prevArrow: <SliderArrow to="next"/>
  };

  return (
    <> 
      <style jsx>{`
        .banner-container {
          max-width: 1536px;  
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
          <Link to="/signup"> 
          <div>
            <img src="https://i.ibb.co/S0XsMLw/VIDA-OFF-DISCOUNT.png" alt="Register for discount" />
          </div>
          </Link>
          <Link to="/editproducts">
          <div>
            <img src="https://i.ibb.co/xHRcWS7/Are-you-a-store-VIDA.png" alt="Add your products" />
          </div>
          </Link>
          <Link to="/category/solar-panels">
          <div>
            <img src="https://i.ibb.co/QPJrbZv/Produce-your-own-energy-and-avoid-bills.png" alt="Solar panels" />
          </div>
          </Link>
          {/* Add more banner slides as needed */}
        </Slider>
      </div> 
    </>
  );
};

export default BannerSlider;
