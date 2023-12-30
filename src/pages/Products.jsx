import {useEffect, useState} from 'react';
import { getProducts } from '../api';
function Products() {

    const [products, setProducts] = useState([]);

    //useEffect can't handle async or anytype of data, just a simple function as first parameter
    useEffect(() => {
        //set the async an independent function inside the useEffect callback 
        async function fetchData () {
            //getting the products list with a funtion from API folder
            const products = await getProducts()
            setProducts(products);
        }
        fetchData()
        
    }, []) 

    console.log(products);

    return (
        <>

        </>
    )
};

export default Products;