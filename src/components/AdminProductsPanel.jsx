import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCategoriesAPI, getProductsbyCategoryId } from '../api';

function AdminProductsPanel () {


  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentProducts, setCurrentProducts] = useState([]);


  useEffect(() => {
    const retrieveCategories = async () => {
      const currentCategories = await getCategoriesAPI()
      setCategories(currentCategories)
         //Setting the first category of the list, the dropdown will have an initial value to show
      if (currentCategories.length > 0) {
        setSelectedCategory(currentCategories[0]);
      }
    };

    retrieveCategories()
  }, [])

  useEffect(() => {
    const retrieveProducts = async() => {
    const currentProductsByCategory = await getProductsbyCategoryId(selectedCategory.id);
    //console.log(currentProductsByCategory)
    setCurrentProducts(currentProductsByCategory)
    }

    retrieveProducts()
  }, [selectedCategory])


  //Selected category inside for the dropdown menu
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value)
    console.log(e.target.value)
  }

  //console.log(selectedCategory.name)


  return (
    <>
    <FormControl sx={{marginBottom: 10}}>
      <InputLabel>Select Category</InputLabel>
      <Select
      value={selectedCategory.name}
      onChange={handleSelectCategory}
      name="category"
      >
      {categories.map(category => {
        return <MenuItem value={category}>{category.name}</MenuItem>
      }) }

      </Select>
    </FormControl>

    </>
  )


}

export default AdminProductsPanel