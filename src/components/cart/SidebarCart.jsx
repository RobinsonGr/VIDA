import CartItem from "./cartItem"
import { useSelector } from "react-redux"

function SidebarCart() {

    const cartItems = useSelector(state => state.cart.items);
    
    return (
        <>
        {cartItems.map(item => {

            console.log(item)
            return <CartItem userData={item} key={item.id}/>
        })}
        </>
    )
}

export default SidebarCart