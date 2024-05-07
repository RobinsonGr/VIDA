import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../api";
import { Typography, Box, Button, Grid, Paper } from "@mui/material";
import QuantityInput from "../components/productPage/NumberInput";

function Product() {
  const cartItems = useSelector((state) => state.cart.items);
  const product = {
    description: "Set of reusable bamboo utensils including fork, knife, and spoon.",
    id: 2,
    img: null,
    name: "Eco-Friendly Home",
    price: 13,
    stock: 50,
  };

  useEffect(() => {
    const retrieveProduct = async () => {
      console.log(await getProduct(2));
    };
    retrieveProduct();
  }, []);

  return (
    <Box style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ width: "100%", marginBottom: "16px" }}>
            <img src={product.img} alt={product.name} style={{ width: "100%", height: "auto" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Price: ${product.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {product.stock} in stock
          </Typography>
          <QuantityInput></QuantityInput>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;