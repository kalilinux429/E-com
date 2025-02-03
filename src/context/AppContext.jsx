// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AppContext = createContext();
// export const useAppContext = () => useContext(AppContext);

// export const AppProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [cart, setCart] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;


//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [darkMode]);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
//     axios.get("https://fakestoreapi.com/products/categories").then((res) => setCategories(res.data));
//   }, []);

//   return (
//     <AppContext.Provider value={{ user, setUser, products, categories, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, cart, setCart, darkMode, setDarkMode, currentPage, setCurrentPage, itemsPerPage }}>
//       {children}
//     </AppContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user info after Google login
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Check if user data exists in localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser)); // Set the user if data exists
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
        localStorage.removeItem("user"); // Remove invalid user data
      }
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user"); // Clear user data when logged out
    }
  }, [user]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
    axios.get("https://fakestoreapi.com/products/categories").then((res) => setCategories(res.data));
  }, []);

  const handleLogin = (googleUser) => {
    // Adjust the user object based on the Google login response
    setUser(googleUser);
  };

  const handleLogout = () => {
    setUser(null); // Clears the user from context
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      handleLogin,
      handleLogout,
      products,
      categories,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      cart,
      setCart,
      darkMode,
      setDarkMode,
      currentPage,
      setCurrentPage,
      itemsPerPage
    }}>
      {children}
    </AppContext.Provider>
  );
};
