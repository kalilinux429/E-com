import React from "react";
import { useAppContext } from "../context/AppContext";

const ProductCart = ({ product }) => {
  const { cart, setCart } = useAppContext();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => setCart([...cart, product])}>Add to Cart</button>
    </div>
  );
};

export default ProductCart;
