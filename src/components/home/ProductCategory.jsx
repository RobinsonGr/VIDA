import React, { useState, useEffect } from 'react';
import { getProductsbyCategoryId } from '../../api';
import { Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';

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
    infinite: true, // Enable infinite loop scrolling
    speed: 500,  // Slide transition speed (in milliseconds)
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 5, // Number of slides to scroll per transition
    responsive: [  // Responsive settings for different screen sizes
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};


  return (
    <Box>
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCategory;
