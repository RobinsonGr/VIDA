import { useState } from 'react';
import SidebarCart from './SidebarCart';

const ShoppingCart = 'https://iili.io/JwCneBj.md.png';

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
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
      <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} ></SidebarCart>
        
    </>
  );
}

export default Cart;
