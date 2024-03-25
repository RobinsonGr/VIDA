// ProductCategory.jsx
import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '../api'; // You'll need to implement this API function

const ProductCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products by category when the component mounts
     const retrieveProducts = async () => {
        const retrievedProducts = await getProductsByCategory()
        setProducts(retrievedProducts)
     }
     retrieveProducts()
  }, [category]);

  return (
    <div>
      <h2>{category} Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            {product.img ? (<img src={product.img} alt={product.name} />) : null}
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
