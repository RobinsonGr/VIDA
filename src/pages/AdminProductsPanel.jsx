import { Button, FormControl, InputLabel, MenuItem, Select, Typography, Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCategoriesAPI, getProductsbyCategoryId } from '../api';
import EditProduct from '../components/EditProduct';
import AddProduct from '../components/AddProduct';

function AdminProductsPanel () {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentProducts, setCurrentProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null)
  //Toggle button to change between EditProduct and AddProduct
  const [toggleProductOption, setToggleProductOption] = useState(false);

  useEffect(() => {
    const retrieveCategories = async () => {
      const currentCategories = await getCategoriesAPI()
      setCategories(currentCategories)
         //Setting the first category of the list, the dropdown will have an initial value to show
        setSelectedCategory(currentCategories[0]);
    };

    retrieveCategories()
  }, [])

  //Every thie a category is selected, the code wrapped by useEffect will be execute and will retrieve the products
  useEffect(() => {
    const retrieveProducts = async() => {
      const currentProductsByCategory = await getProductsbyCategoryId(selectedCategory.id);
      setCurrentProducts(currentProductsByCategory)
    }

    if(selectedCategory) {
      retrieveProducts()
    }    
  }, [selectedCategory])


  //Selected category inside for the dropdown menu
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value)

  };

  const handleEditingProduct = (id) => {
    if (editingProductId === id) {
      setEditingProductId(null); 
    } else {
      setEditingProductId(id);
    }
  };
  


  return (
    <>
    {/*Categories dropdown, every tiem a category is selected, handleSelectCategory will retrieve products lists */ }
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
{/*Edit product section */}

{/* Toggle to change between editProduct(true) and AddProduct, but default will appear EditProduct first*/}
      
      <Button onClick={() => {setToggleProductOption(false)}}>Edit Product</Button>
      <Button onClick={() => {setToggleProductOption(true)}}>Add Product</Button>
      <Box >
        {
           toggleProductOption ? (

          <AddProduct></AddProduct>

           ) : (
              currentProducts.length > 0 && currentProducts.map((product) => 
              editingProductId === product.id ? (
                //EditProduct is a form handled by formik with validaton, if the user hits edit button this will apear
              <EditProduct key={product.id}  editingProductId={editingProductId} setToggleProductOption={setToggleProductOption} productData={{...product}} />) : ((
                <div key={product.id}>
                  <Typography>{product.name}</Typography>
              <Button onClick={() => handleEditingProduct(product.id)}>Edit</Button>
              <Button>Delete</Button>
              </div>))
              )
              )
            } 
        </Box>

    </>
  );
};

export default AdminProductsPanel