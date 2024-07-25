import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../features/cartSlice';
import { Close } from '@mui/icons-material';

function CartItem({ userData }) {
  const { id, name, price, img, quantity } = userData;

  const dispatch = useDispatch();

  const handleDeleteProduct = (elementId) => {
    dispatch(removeProduct({ id: elementId })); 
  };

  return (
    <Card sx={{ position: 'relative', paddingX: '0.5rem', maxWidth: '100%', marginBottom: '15px' }}> 
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            height="80"
            image={img}
            alt={name}
          />
        </Grid>
        <Grid item xs={6.5}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2">
              Price: ${price}
            </Typography>
            <Typography variant="body2">
              Quantity: {quantity}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={1.5} sx={{paddingLeft: "7px", placeSelf: 'center', justifyEnd: 'end'}}>
          <IconButton onClick={() => handleDeleteProduct(id)}>
                <Close /> 
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CartItem
