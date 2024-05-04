import CartList from "./CartList";
import { Drawer, Typography, Button } from '@mui/material';
import { useSelector } from "react-redux";


function SidebarCart({isCartOpen, toggleCart}) {
  const cartItems = useSelector(state => state.cart.items);

    return (
      <Drawer 
        anchor="right"
        open={isCartOpen} 
        onClose={toggleCart}
        >
        <div style={{ width: '350px', padding: '20px'}}> 
        {cartItems.length === 0 ? (
          <Typography variant="h6" align="center" color="textSecondary">
                    Your cart is empty
                </Typography>
            ) : (
               <>
                <CartList/>
                <Button variant="contained" sx={{ width: '100%', marginTop: '15px' }}> 
                  Checkout 
                </Button>
               </> 
            )}         
          </div>
      </Drawer>
     )
}

export default SidebarCart