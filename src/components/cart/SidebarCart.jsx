import CartItem from "./cartItem"
import { useSelector } from "react-redux"

function SidebarCart() {

    const cartItems = useSelector(state => state.cart.items);
    
    return (
        <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}> // Assuming you manage state with isCartOpen and toggleCart
           <div style={{ width: '350px', padding: '20px'}}> 
              {cartItems.map(item => (
                 <CartItem userData={item} key={item.id}/>
              ))}
           </div>
        </Drawer>
     )
}

export default SidebarCart