import { useEffect, useState } from 'react';
import { getProducts } from '../api';
import Item from '../components/Item';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

function Products() {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('')
  const { category } = useParams();

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts(category);
      setCategoryName(products[0].category)
      setProducts(products);
    }
    fetchData();
  }, [category]);



  return (
    <Container> 
      <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>{categoryName} Products</h2> 

      <Grid container spacing={3}  >
        {products &&
          products.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={data.id}> 
               <Item itemData={data} />
            </Grid> 
          ))}
      </Grid>
      </Container>
  );
}

export default Products;
