import React, { useState, useEffect } from 'react';
import BannerSlider from '../components/home/BannerSlider';
import ProductCategory from '../components/home/ProductCategory';
import { getCategoriesAPI } from '../api'; 
import { Container, CssBaseline, Box, Typography, useMediaQuery } from '@mui/material'; 
import EditPanelButtons from '../components/EditPanelsButtons';

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
 
  useEffect(() => {
    const retrieveCategories = async () => {
      const categories = await getCategoriesAPI();
      setCategoryList(categories);
    };
    retrieveCategories();
  }, []);

  return (
      <Container maxWidth="xl"> 
      {/*This is to reset the styles */}
      <CssBaseline /> 
      <EditPanelButtons/>

        <BannerSlider  />

        <Container sx={{marginTop: '1.5rem'}}>
        {categoryList.length > 0 ? (
          categoryList.map(({ id, name }) => (
            <Box key={id} mb={8}> 
              <Typography variant="h4" align="center" gutterBottom>
                {name}
              </Typography>
              <ProductCategory categoryData={{ id, name }} /> 
            </Box>
          ))
        ) : null}

        </Container>
        
      </Container>
  );
};

export default Home;