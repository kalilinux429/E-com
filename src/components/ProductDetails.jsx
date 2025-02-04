import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { product } = location.state  ||{}// Get the product passed via state

  return (
    <div className="product-detail">
      {/* Back arrow button to navigate to home */}
      <button
        className="back-btn"
        onClick={() => navigate("/")} // Navigate to home page
      >
        ← 
      </button>

      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>

      {/* Add to Cart button */}
      <button className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
