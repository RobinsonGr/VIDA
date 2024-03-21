import {  useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";


function Item({itemData}) {

    const {id, price, name, description} = itemData

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addProduct({
            id,
            price,
            name,
            quantity: 1
        }))
    }
    return (
        <>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
        </>
    )
};

export default Item;