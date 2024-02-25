import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import {getCategories} from '../api'

function Header() {
    const [categories, setCategories] = useState([])

    //retrieve the current categories from the Db, using the api function getCategories
    useEffect(() => {
        const fetchData = async() => {
            const categories = await getCategories()
            setCategories(categories);
        }

        //fetching data
        fetchData()
    }, []);
    
    return(
        <div>
            <ul>
            
               {
                categories.map(route => (
                    <li key={route.name}>
                        {/*Using regex to convert string with spaces into string with hypes to 
                        match the url pattern
                        */}
                        <Link to={`/category/${route.name.replace(/\s+/g, '-').toLowerCase()}`}>{route.name}</Link>
                    </li>
                ))
               } 
            </ul>
        </div>

    )
};

export default Header;