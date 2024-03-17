import { ShoppingBagTwoTone } from "@mui/icons-material";
import { useState } from "react";
import SidebarCart from "./SidebarCart";



function CartButton () {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    };

    return (
        <> 
        <ShoppingBagTwoTone onClick={toggleCart}></ShoppingBagTwoTone>
         {isCartOpen && <SidebarCart/>}
        </>
    )
}

export default CartButton;