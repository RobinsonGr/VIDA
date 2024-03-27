import React, { useState, useEffect } from 'react';
import BannerSlider from '../components/home/BannerSlider';
import ProductCategory from '../components/home/ProductCategory';
import { getCategoriesAPI } from '../api';



const Home = () => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const retrieveCategories = async () => {
           const categories = await getCategoriesAPI();
            setCategoryList(categories)
        }
        retrieveCategories()
    }, [])

    console.log(categoryList)

  return (
    <div>
      <BannerSlider />
      {
        categoryList.length > 0 ? (categoryList.map(({id, name}) => (
            <ProductCategory categoryData={{id, name}}/>
        ))) : null
      }

    </div>
   );
};

export default Home;