import CartList from "./CartList";

function SidebarCart() {

    const cartItems = useSelector(state => state.cart.items);
    
    return (
        <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}> 
          <CartList></CartList>
        </Drawer>
     )
}

export default SidebarCart