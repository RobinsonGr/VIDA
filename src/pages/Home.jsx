import React, { useState, useEffect } from 'react';
import BannerSlider from '../components/home/BannerSlider';
import ProductCategory from '../components/home/ProductCategory';
import { getCategoriesAPI } from '../api'; 
import { Container, CssBaseline, Box, Grid, Typography, useMediaQuery } from '@mui/material'; 

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  const isTabletOrSmaller  = useMediaQuery('(max-width:600px)');
  const addCategoriesButton = isTabletOrSmaller ? 'https://i.ibb.co/NLnmmfW/Add-or-edit-categories-under-600px-ECO.png' : 'https://i.ibb.co/sWQgF6D/Add-or-edit-categories-over-600-px-ECO.png';
  const addProductsButton = isTabletOrSmaller ? 'https://i.ibb.co/pPTmDRB/Add-or-edit-products-under-600px-ECO.png' : 'https://i.ibb.co/vDwCKQv/Add-or-edit-products-over-600-px-ECO.png';



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
      
      
<Grid container sx={{maxWidth: '100%'}}> 

<Grid item xs={6}>
  <img
      src={addCategoriesButton}
      alt="Logo"
      style={{ height: '100%', width: '100%', maxWidth: '100%'}}
    />
</Grid>

<Grid item  xs={6}>
  <img
      src={addProductsButton}
      alt="Logo"
      style={{ height: '100%', width: '100%', maxWidth: '100%'}}
    />
</Grid>

</Grid>
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