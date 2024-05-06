import React from 'react';
import CartList from '../components/cart/CartList';
import StripeContainer from '../payment/StripeContainer';
import { Box, Typography, Button } from '@mui/material'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Changed import from useHistory to useNavigate

function Payment() {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate(); // Changed from useHistory to useNavigate

  const goToHome = () => {
    navigate('/'); // Changed from history.push to navigate('/')
  };

  return (
    <Box display="flex" justifyContent="center" gap={10} p={2}>
      {cartItems.length === 0 ? (
        <Box textAlign="center">
          <Typography variant="h6">Your cart is empty :(</Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: '16px' }} onClick={goToHome}>
            Continue Shopping 
          </Button>
        </Box>
      ) : (
        <>
          <CartList />
          <StripeContainer />
        </>
      )}
    </Box>
  );
}

export default Payment;
