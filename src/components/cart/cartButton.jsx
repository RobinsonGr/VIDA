import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Drawer, Typography, Button } from '@mui/material';
import CartItem from './cartItem'; 

const ShoppingCart = 'https://iili.io/JwCneBj.md.png';

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  
    const calculateTotal = () => {
        //it will mutiply every element price with the total amount of every element, then it will add up
        //the total of the previous elements, reduce needs a initial value which is 0 adn toFixed add two decimals
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  }
  
  const total = calculateTotal(); 
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <img 
        src={ShoppingCart} 
        alt="Shopping Cart" 
        onClick={toggleCart}
        style={{ height: '30px', cursor: 'pointer' }} 
      /> 
        <Drawer 
            anchor="right"
            open={isCartOpen} 
            onClose={toggleCart}
            >
            <div style={{ width: '350px', padding: '20px'}}> 
                {cartItems.map(item => (
                    <CartItem userData={item} key={item.id}/>
                ))}

                {/* Total and Checkout */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">${total}</Typography>
                </div>
                <Button variant="contained" sx={{ width: '100%', marginTop: '15px' }} onClick={() => console.log('Checkout')}> 
                Checkout 
                </Button> 
            </div>
        </Drawer>
    </>
  );
}

export default Cart;
