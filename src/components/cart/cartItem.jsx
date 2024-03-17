

// name, price, quantity

function CartItem({userData}) {

    const {name, price, quantity} = userData;

    return(
        <>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{quantity}</p>
        </>
    )
}

export default CartItem;