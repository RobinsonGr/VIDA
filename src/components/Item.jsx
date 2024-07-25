import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";
import { useTheme } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

function Item({ itemData }) {
  const { id, price, name, description, img, stock } = itemData;
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate()
  

  const handleAddToCart = () => {
    dispatch(addProduct({
      id,
      price,
      name,
      img,
      quantity: 1
    }));
  };

  const handleGoToProduct = () => {
    const formattedProductName = name.replace(/\s+/g, '-'); 
    navigate(`/product/${id}/${formattedProductName}`);
  };
  

  return (
    <Card sx={{ width: '100%', maxWidth: '370px', height: '400px', boxShadow: 'lg', position: 'relative' }}>
      <CardActionArea onClick={handleGoToProduct}>
        <CardMedia
          component="img"
          height="200px"
          image={img}
          alt={name}
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 80 ? description.substring(0, 80) + '...' : description}
        </Typography>

        
        <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginTop: '1rem',
                alignItems: 'center',  
                width: '100%',
              
              }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
          <Typography variant="body2" color={stock > 0 ? theme.palette.primary.main : 'error.main'}>
             {stock <= 10 ? (
            <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'green' }}>
              Only {stock} left in stock!
            </span>
          ) : (
            ` Stock: ${stock}`
            )}
          </Typography>
        </Box> 
      </CardContent>
      </CardActionArea>


      <CardActions sx={{ position: 'absolute', bottom: '5px', width: '100%' }}>
        <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
