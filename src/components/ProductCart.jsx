import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProductCart = ({ product }) => {
  const { cart, setCart } = useAppContext();
  const [isAdded, setIsAdded] = useState(false);  // Track if product is added to cart
  const navigate = useNavigate();

  // Navigate to product details page
  const goToProductDetail = () => {
    navigate("/productdetails", { state: { product } }); // Passing the product details via state
  };

  // Handle Add/Remove from Cart
  const handleCartButton = () => {
    if (!isAdded) {
      setCart([...cart, product]); // Add to cart
    } else {
      setCart(cart.filter(item => item.id !== product.id)); // Remove from cart
    }
    setIsAdded(!isAdded); // Toggle the state
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} onClick={goToProductDetail} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        onClick={handleCartButton}
        className={isAdded ? "remove-from-cart" : "add-to-cart"}
      >
        {isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCart;
