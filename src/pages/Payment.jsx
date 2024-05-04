import React from 'react';
import CartList from '../components/cart/CartList';
import StripeContainer from '../payment/StripeContainer';
import { Box } from '@mui/material'; // Import necessary components

function Payment() {
  return (

        <Box display="flex" justifyContent="center"  gap={10} p={2}>
            <CartList />
            <StripeContainer />
        </Box>
  );
}

export default Payment;