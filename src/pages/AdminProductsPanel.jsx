import { Button, FormControl, InputLabel, MenuItem, Select, Typography, Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCategoriesAPI, getProductsbyCategoryId } from '../api';
import EditProduct from '../components/EditProduct';

function AdminProductsPanel () {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const retrieveCategories = async () => {
      const currentCategories = await getCategoriesAPI()
      setCategories(currentCategories)
         //Setting the first category of the list, the dropdown will have an initial value to show
     
        setSelectedCategory(currentCategories[0]);
        console.log({selectedCategory: currentCategories[0].name})
      
    };

    retrieveCategories()
  }, [])

  useEffect(() => {
    const retrieveProducts = async() => {
      const currentProductsByCategory = await getProductsbyCategoryId(selectedCategory.id);
      setCurrentProducts(currentProductsByCategory)
    //console.log(currentProductsByCategory)
    }

    if(selectedCategory) {
      retrieveProducts()
    }    
  }, [selectedCategory])


  //Selected category inside for the dropdown menu
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value)

  };


  return (
    <>
    <FormControl sx={{marginBottom: 10}}>
      {(selectedCategory && selectedCategory.id) && ( // Only render Select after data categories is fetched
        <>
        <InputLabel>Select Category</InputLabel>
          <Select
          value={selectedCategory}
          onChange={handleSelectCategory}
          name="category"
          >
          {categories.map(category => {
            return <MenuItem key={category.id} value={category}>{category.name}</MenuItem>
          })}
        </Select>
        </>
      )}
    </FormControl>

    <Box >

          {currentProducts.length > 0 && currentProducts.map((product) => (
          <EditProduct productData={{...product}} />))}
    </Box>
    </>
  );
};

export default AdminProductsPanel