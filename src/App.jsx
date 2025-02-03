import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./styles.css";

// Import Context
import { AppProvider } from "./context/AppContext";

// Import Components
import Navbar from './components/Navbar.jsx'

import ProductList from "./components/ProductList";
import Cart from "./components/Cart.jsx"
import Home from "./Pages/Home";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="801279228127-tmo56uran2kavdv8kde446lrvjg4pjim.apps.googleusercontent.com">
      <AppProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </AppProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
