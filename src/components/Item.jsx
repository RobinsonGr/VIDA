import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";
import { useTheme } from '@mui/material'; 

function Item({ itemData }) {
  const { id, price, name, description, img, stock } = itemData;
  const dispatch = useDispatch();
  const theme = useTheme();
  
  const handleAddToCart = () => {
    dispatch(addProduct({
      id,
      price,
      name,
      img,
      quantity: 1
    }));
  };

  return (
    <Card sx={{ width: '100%', height: '400px', boxShadow: 'lg', position: 'relative' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={img}
          alt={name}
        />
      </CardActionArea>
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
                alignItems: 'center',  
                position: 'absolute',  
                bottom: '70px', 
                width: '88%',
              
              }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
          <Typography variant="body2" color={stock > 0 ? theme.palette.primary.main : 'error.main'}>
            Stock: {stock}
          </Typography>
        </Box> 
      </CardContent>

      <CardActions sx={{ position: 'absolute', bottom: '5px', width: '100%' }}>
        <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
