// import React from "react";
// import { useAppContext } from "../context/AppContext";
// import './Cart.css'

// const CartItem = () => {
//   const { cart, setCart } = useAppContext();

//   // Ensure price is a valid number, defaulting to 0 if missing or NaN
//   const getPrice = (price) => {
//     const parsedPrice = parseFloat(price);
//     return isNaN(parsedPrice) ? 0 : parsedPrice;
//   };

//   // Remove item from cart
//   const removeItem = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   // Calculate total price with a valid number check
//   const totalPrice = cart.reduce(
//     (total, item) => total + getPrice(item.price) * item.quantity,
//     0
//   );

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item, index) => (
//             <div key={`${item.id}-${index}`} className="cart-item">
//               <div className="cart-item-details">
//                 <img src={item.image} alt={item.title} className="cart-item-image" />
//                 <div className="cart-item-info">
//                   <span>{item.title}</span>
//                   <span>${getPrice(item.price).toFixed(2)}</span>
//                   <div className="cart-actions">
//                     <button className="remove-button" onClick={() => removeItem(item.id)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <hr className="cart-item-separator" />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Checkout Section */}
//       {cart.length > 0 && (
//         <div className="checkout">
//           <h3>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h3>
//           <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
//           <button className="checkout-btn">Proceed to Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItem;


import React from "react";
import { useAppContext } from "../context/AppContext";
import './Cart.css'

const CartItem = () => {
  const { cart, setCart } = useAppContext();

  // Ensure price is a valid number
  const getPrice = (price) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  // Ensure quantity is a valid number
  const getQuantity = (quantity) => {
    return isNaN(quantity) || quantity <= 0 ? 1 : quantity;
  };

  // Remove item from cart
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + getPrice(item.price) * getQuantity(item.quantity),
    0
  );

  // Calculate total items
  const totalItems = cart.reduce((total, item) => total + getQuantity(item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <span>{item.title}</span>
                  <span>${getPrice(item.price).toFixed(2)}</span>
                  <div className="cart-actions">
                    <button className="remove-button" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <hr className="cart-item-separator" />
            </div>
          ))}
        </div>
      )}

      {/* Checkout Section */}
      {cart.length > 0 && (
        <div className="checkout">
          <h3>Total Items: {totalItems}</h3>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
