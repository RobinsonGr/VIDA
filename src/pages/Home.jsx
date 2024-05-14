import React, { useState, useEffect } from 'react';
import BannerSlider from '../components/home/BannerSlider';
import ProductCategory from '../components/home/ProductCategory';
import { getCategoriesAPI } from '../api'; 
import { Container, CssBaseline, Box, Grid, Typography } from '@mui/material'; 

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
      <CssBaseline /> 
      
      
<Grid container sx={{maxWidth: '1200px'}}> 

<Grid item xs={6}>
  <img
      src="https://i.ibb.co/pwbkBzV/Add-or-edit-categories-eco.png"
      alt="Logo"
      style={{ height: '100%', width: '100%', maxWidth: '100%'}}
    />
</Grid>

<Grid item  xs={6}>
  <img
      src="https://i.ibb.co/pwbkBzV/Add-or-edit-categories-eco.png"
      alt="Logo"
      style={{ height: '100%', width: '100%', maxWidth: '100%'}}
    />
</Grid>

</Grid>
        <BannerSlider  />

        {/* Category Sections with Spacing */}
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

        {/* Additional Section Example */} 
        <Box mt={8}>
          <Typography variant="h4" align="center" gutterBottom>
            Featured Products
          </Typography>
         {/* A carousel for featured products could go here */}
        </Box> 
      </Container>
  );
};

export default Home;