import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProductCard({ product }) {


  
  return (
    <Card sx={{ width: 320, maxWidth: '100%', height: '380px', boxShadow: 'lg', position: 'relative' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          src={product.img}
          alt={product.name} 
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.stock <= 10 ? (
            <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'green' }}>
              Only {product.stock} left in stock!
            </span>
          ) : (
            product.stock
            )}
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '1rem' }}>
          ${product.price}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button variant="contained" color="primary" size="large" sx={{color: "#FFFFFF"}}>
          Watch more
        </Button>
      </CardActions>
    </Card>
  );
}
