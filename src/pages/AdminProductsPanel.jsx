import { Button, FormControl, InputLabel, MenuItem, Select, Typography, Box, Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCategoriesAPI, getProductsbyCategoryId, deleteProduct } from '../api';
import EditProduct from '../components/productEdit/EditProduct';
import AddProduct from '../components/productEdit/AddProduct';
import EditPanelButtons from '../components/EditPanelsButtons';


function AdminProductsPanel () {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentProducts, setCurrentProducts] = useState([]);


  const [productAdded, setProductAdded] = useState(false);
//I placed this in addProducts to show the modal whena prodduct is crreated, but i need it here to uset it  as a dependency to 
//re render and re fetch the category to show the latest one. is similar a productEdited


  //This goes inside handleProductEdited, which is passing down to EditProduct,  when the product is edited, this state will change
  //every time the value changes between true and false, it will force to useEffect from retrieveProduct to give the updated products
  const [productEdited, setProductEdited] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
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
    setProductEdited(false)
  }, [productEdited])

  //Every thie a category is selected, the code wrapped by useEffect will be execute and will retrieve the products
  useEffect(() => {
    const retrieveProducts = async() => {
      const currentProductsByCategory = await getProductsbyCategoryId(selectedCategory.id);
      setCurrentProducts(currentProductsByCategory)
    }


    if(selectedCategory.id) {
      retrieveProducts()
    }    
  }, [selectedCategory, productAdded])

//this will be passing down to EditProducts (it will close the form and update the products)
  const handleProductEdited = () => {
    //will change the ProductEdited which is the dependency of useEffect's categorics-products logic, to get the lastest updateds 
    //and when the editing is done, the same product will appear edited
    setProductEdited(true)
    //to close the form after the button submit (edit form) is hit.
    setEditingProductId(null)
  }


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

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setCurrentProducts(currentProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <>
    <EditPanelButtons/>
 
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '80%', 
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      {/* Categories dropdown */}
      <FormControl sx={{ marginBottom: 10}}>
        {selectedCategory && selectedCategory.id && ( 
          <>
            <InputLabel>Select Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleSelectCategory}
              name="category"
            >
              {categories.map(category => (
                <MenuItem key={category.id} value={category}>{category.name}</MenuItem>
              ))}
            </Select>
          </>
        )}
      </FormControl>

      {/* Toggle for Edit / Add Product */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'center', marginBottom: '20px' }}> 
        <Button 
          onClick={() => {setToggleProductOption(false)}}
          variant={toggleProductOption ? 'outlined' : 'contained'}
        >
          Edit Product
        </Button>
        <Button 
          onClick={() => {setToggleProductOption(true)}}
          variant={toggleProductOption ? 'contained' : 'outlined'} 
        >
          Add Product
        </Button>
      </Box>

      {/* Products edit/display section */}
      <Box>
        {toggleProductOption ? (
          <AddProduct productAdded={productAdded} setProductAdded={setProductAdded} selectedCategory={selectedCategory.id}/>
        ) : (
          <Box sx={
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }
          }> 
          {
              currentProducts.length > 0 && currentProducts.map((product) => 

              editingProductId === product.id ? (
                <EditProduct 
                  key={product.id} 
                  productData={{...product}} 
                  handleProductEdited={handleProductEdited}
                />
              ) : (
                <Box sx={{ textAlign: 'center'}} key={product.id}>
                  <Typography >{product.name}</Typography>
                  <Button onClick={() => handleEditingProduct(product.id)}>Edit</Button>
                  <Button onClick={() => handleDelete(product.id)}>Delete</Button>
                </Box>
              )
            )
          }
          </Box>
        )} 
      </Box>
    </Box>
    </>
  );
};

export default AdminProductsPanel