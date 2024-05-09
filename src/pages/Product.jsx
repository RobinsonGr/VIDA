import React, { useEffect, useState } from "react";
import { getProduct } from "../api";
import { Typography, Box, Button, Grid, Paper } from "@mui/material";
import QuantityInput from "../components/productPage/NumberInput";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";

function Product() {
  
  const { id } = useParams();

  const [productData, setProductData] = useState(null);

  const [units, setUnits] = useState(1);
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addProduct({
      id: productData.id,
      price: productData.price,
      name: productData.name,
      img: productData.img,
      quantity: units
    }));
  };

  const handleProductsUnitsSelected = (event, value) => {
    setUnits(value);
  };

  useEffect(() => {
    const retrieveProduct = async () => {
      const productInfo = await getProduct(id);
      setProductData(productInfo);
    };
    retrieveProduct();
  }, []);

  console.log(productData);

  return (
    <Box style={{ flexGrow: 1, padding: "16px" }}>
    {productData && (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper style={{ width: "100%", marginBottom: "16px" }}>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              {productData.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Price: ${productData.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {productData.description}
            </Typography>
            <QuantityInput 
            handleProductsUnitsSelected={handleProductsUnitsSelected}
            stock={productData.stock}/>
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Typography sx={{margin: '0.4rem'}} variant="body2" color="textSecondary" gutterBottom>
            {productData.stock <= 10 ? (
            <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'green' }}>
              Only {productData.stock} left in stock!
            </span>
          ) : (
            `${productData.stock} in stock`
            )}
            </Typography>
          </Grid>
        </Grid>
      )}
      </Box>
  );
}

export default Product;
