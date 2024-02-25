import {useEffect, useState} from 'react';
import { getProducts } from '../api';
import Item from '../components/Item';
import { useParams } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([]);


    //retrieving the category name from the url param
    const {category} = useParams()
    
    //useEffect can't handle async or anytype of data, just a simple function as first parameter
    useEffect(() => {
        //set the async an independent function inside the useEffect callback 
        async function fetchData () {
            //getting the products list with a funtion from API folder
            const products = await getProducts(category)
            setProducts(products);
        }
        fetchData()
        
    }, [category]) 

    console.log(products)
    
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