import CartItem from "./cartItem"
import { useSelector } from "react-redux"

function CartList() {

    const cartItems = useSelector(state => state.cart.items);
    
    return (
           <div style={{ width: '350px', padding: '20px'}}> 
              {cartItems.map(item => (
                 <CartItem userData={item} key={item.id}/>
              ))}
           </div>    
     )
}

export default CartList;