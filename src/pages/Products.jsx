import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



import "../pages/Products.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3000/products`);
      setProducts(res.data);
    };
    getProducts();
  }, []);

  const handleRatingChange = (productId, ratingValue) => {
 
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, rating: ratingValue } : product
      )
    );
  };










  return (
    <>
          <div className="products-container">
      {products.map((product) => (
        
          <figure className="product-box">
            <h3 className="product-name">{product.product}</h3>

            <Link key={product.id} to={`${product.id}`}>
            
            <img
              className="product-img"
              src={product.image}
              alt={product.product}
            />
            </Link>
            <div className="product-info-container">
              <p className="product-info">{product.info}</p>
              
              <div className="product-ratings">
                <p>
                  {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                  <Rating
                  name={`rating-${product.id}`}
                  value={product.rating || 0}
                  precision={0.5}
                  onChange={(event, newValue) =>
                    handleRatingChange(product.id, newValue)
                  }
                />
                  
                  
                  </p>
              </div>
            </div>
          </figure>
        
      ))}
    </div>



    </>
  );
};
export default Products;