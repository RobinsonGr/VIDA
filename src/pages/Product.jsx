import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../api";
import { Typography, Box, Button, Grid, Paper } from "@mui/material";
import QuantityInput from "../components/productPage/NumberInput";
import { useParams } from "react-router-dom";

function Product() {
  const cartItems = useSelector((state) => state.cart.items);
  const { id } = useParams();

  const [productData, setProductData] = useState(null);

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
            <QuantityInput stock={productData.stock} />
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {productData.stock} in stock
            </Typography>
          </Grid>
        </Grid>
      )}
      </Box>
  );
}

export default Product;
