import React, { useState, useEffect } from 'react';
import { getProductsbyCategoryId } from '../../api';
import { Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import SliderArrow from './SliderArrow';

const ProductCategory = ({ categoryData }) => {
  const { id, name } = categoryData;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const retrieveProducts = async () => {
      const retrievedProducts = await getProductsbyCategoryId(id);
      setProducts(retrievedProducts);
    };
    retrieveProducts();
  }, [id]); // Depend on id directly

  const settings = {
    infinite: products.length > 4,
    speed: 500,
    slidesToShow: products.length >= 4 ? 4 : products.length,
    slidesToScroll: products.length >= 4 ? 4 : products.length, 
    cssEase: 'margin 0.5s', 
    nextArrow: <SliderArrow to="prev"/>,
    prevArrow: <SliderArrow to="next"/>,
    
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: products.length >= 4 ? 4 : products.length,
                slidesToScroll: products.length >= 4 ? 4 : products.length,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: products.length >= 3 ? 3 : products.length,
                slidesToScroll: products.length >= 3 ? 3 : products.length,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: products.length >= 2 ? 2 : products.length,
                slidesToScroll: products.length >= 2 ? 2 : products.length,
            }
        }
    ]
  };


  return (
    <Box>
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} >
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCategory;
