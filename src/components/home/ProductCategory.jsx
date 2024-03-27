// ProductCategory.jsx
import React, { useState, useEffect } from 'react';
import { getProductsbyCategoryId } from '../../api';
import { Box, Typography, Grid, Pagination, useTheme } from '@mui/material';

const ProductCategory = ({categoryData}) => {
  const {id, name} = categoryData;
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1) 
  const productsPerPage = 6;

  useEffect(() => {
    // Fetch products by category when the component mounts
     const retrieveProducts = async () => {
        const retrievedProducts = await getProductsbyCategoryId(id)
        setProducts(retrievedProducts)
     }
     retrieveProducts()
  }, [categoryData]);

  const handlePageChange = (event, newPage) => {
      setPage(newPage)
  };

  return (
    <div>
      <Typography variant="h5">{name} Products</Typography>
      <Grid container spacing={2}>
        {products
          .slice((page - 1) * productsPerPage, page * productsPerPage)
          .map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <Box border={1} p={2} textAlign="center" bgcolor={theme.palette.neutral.main}>
                {product.img && (<img src={product.img} alt={product.name} />)}
                <Typography variant='subtitle1'>{product.name}</Typography>
                <Typography variant='body1'>{product.price}</Typography>
              </Box>
            </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(products.length / productsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant='outlined'
        shape="rounded"
        color="primary"
        style={{marginTop: 20}}
      >
      </Pagination>
    </div>
  );
}

export default ProductCategory;
