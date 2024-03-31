import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function CartItem({ userData }) {
  const { name, price, img, quantity } = userData;

  return (
    <Card sx={{ maxWidth: '100%', marginBottom: '15px' }}> 
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            height="80"
            image={img}
            alt={name}
          />
        </Grid>
        <Grid item xs={8}>
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
      </Grid>
    </Card>
  );
}

export default CartItem
