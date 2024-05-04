import React from 'react';
import CartList from '../components/cart/CartList';
import StripeContainer from '../payment/StripeContainer';
import { Box, Paper } from '@mui/material'; // Import necessary components

function Payment() {
  return (
    // <Ddiv style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>

        <Box display="flex" justifyContent="center" p={2}>
            <CartList />
            <StripeContainer />
        </Box>
  );
}

export default Payment;