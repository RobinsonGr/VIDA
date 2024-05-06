import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

function CartList() {
    const cartItems = useSelector(state => state.cart.items);

    const calculateTotal = () => {
      //it will mutiply every element price with the total amount of every element, then it will add up
      //the total of the previous elements, reduce needs a initial value which is 0 adn toFixed add two decimals
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const total = calculateTotal(); 

    return (
      <>
         <>
           <Box sx={{ display: 'flex', flexDirection: 'column ', justifyContent: 'space-between', marginTop: '20px' }}>
                {cartItems.map(item => (
            <CartItem userData={item} key={item.id}/>
          ))}
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6">${total}</Typography>
          </Box>
         </> 
           
    </>
    );
};

export default CartList;
