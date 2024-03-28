import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import theme from '../../theme';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 200, height: 380, borderRadius: 2 }}> 
      <CardActionArea sx={{
          ':hover': {
            backgroundColor: theme.palette.primary.light, 
          }
        }}
      >
        <CardMedia
          component="img"
          height="200" 
          src={product.img} // Use your actual image source
          alt={product.name}  // Add an alt for accessibility
        />
        <CardContent sx={{ paddingBottom: 60 }}> 
          <Typography gutterBottom variant="subtitle1" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ position: 'absolute', bottom: 15, justifyContent: 'center' }}> 
        <Button size="small" variant="contained" sx={{ 
            background: 'accent.main',
            color: 'white' // Or your preferred text color
          }}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
