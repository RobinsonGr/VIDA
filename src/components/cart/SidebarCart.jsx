import CartList from "./CartList";
import { Drawer, Typography, Button } from '@mui/material';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SidebarCart({ isCartOpen, toggleCart }) {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate(); // Initialize navigate

  const handleCheckout = () => {
    navigate("/payment"); // Redirect to /payments
  };

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={toggleCart}
    >
      <div style={{ width: '350px', padding: '20px' }}>
        {cartItems.length === 0 ? (
          <Typography variant="h6" align="center" color="textSecondary">
            Your cart is empty
          </Typography>
        ) : (
          <>
            <CartList />
            <Button
              variant="contained"
              sx={{ width: '100%', marginTop: '15px' }}
              onClick={handleCheckout} 
            >
              Checkout
            </Button>
          </>
        )}
      </div>
    </Drawer>
  );
}

export default SidebarCart;
