import { useState } from 'react';
import SidebarCart from './SidebarCart';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';

const ShoppingCart = 'https://iili.io/JwCneBj.md.png';

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Badge badgeContent={totalQuantity} overlap="circular" color="success">
        <img 
          src={ShoppingCart} 
          alt="Shopping Cart" 
          onClick={toggleCart}
          style={{ height: '30px', cursor: 'pointer' }} 
        /> 
      </Badge>
      <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} ></SidebarCart>
    </>
  );
}

export default Cart;
