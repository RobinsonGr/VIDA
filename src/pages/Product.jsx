import { useSelector } from "react-redux";
import { getProduct } from "../api";
import { useEffect } from "react";

function Product(){

    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const retrieveProduct = async () => {
            console.log(await getProduct(2))
        };
        retrieveProduct();
    } ,[])

    //this is the obj form
{/* 

description: "Set of reusable bamboo utensils including fork, knife, and spoon."
id: 2
img: null
name: "Eco-Friendly Home"
price: 13
stock: 50
*/}
    return (
        <>
        <p>helo</p>
        </>
    )
}

export default Product;
