import {useEffect, useState} from 'react';
import { getProducts } from '../api';
import Item from '../components/Item';

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

    return (
        <>
        {
            products && 
            products.map((data) => {
               return <Item itemData={data}/>
            })
        }
        </>
    )
};

export default Products;