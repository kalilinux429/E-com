import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const { products } = useAppContext();
  
  // Find the product with the matching ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>; // Show message if product doesn't exist
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>Price: </strong>${product.price}</p>
      <p><strong>Category: </strong>{product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
