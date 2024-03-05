// Post.js
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Post({ products }) {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    // Navigate to "/Service" with the product ID as a parameter
    navigate(`/Service/${productId}`);
  }

  if (!products || products.length === 0) {
    return null; // Return early if products is empty or undefined
  }

  return (
    <div className="post">
      <h1><span>India's Most</span> Affordable Home Salon</h1>
      {products.map(product => (
        <div key={product._id}>
          <div className="postdiv">
            <div className="postbox" onClick={() => handleClick(product._id)}>
              <img src={`${product.images[0]}`} alt={product.name} />
              <p>{product.name}</p> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
