// import React, { useCallback, useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
// import { FaShoppingCart } from "react-icons/fa";
// import { useAppContext } from "../context/AppContext";
// import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../firebase"; 
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const { user, setUser, searchQuery, setSearchQuery, darkMode, setDarkMode, totalItems } = useAppContext();
//   const navigate = useNavigate();

//   // Handle sign out
//   const handleSignOut = useCallback(() => {
//     signOut(auth)
//       .then(() => {
//         setUser(null);
//         localStorage.removeItem("user");
//       })
//       .catch((error) => console.error("Error signing out: ", error));
//   }, [setUser]);

//   // Handle Firebase login
//   const handleLogin = useCallback(() => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         localStorage.setItem("user", JSON.stringify(user));
//       })
//       .catch((error) => console.error("Error signing in: ", error));
//   }, [setUser]);

//   // Toggle Dark Mode
//   const toggleDarkMode = useCallback(() => {
//     setDarkMode((prev) => !prev);
//   }, [setDarkMode]);

//   // Apply dark mode globally
//   useEffect(() => {
//     document.body.classList.toggle("dark", darkMode);
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   // Redirect to Home Page
//   const goHome = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   return (
//     <nav className="navbar">
//       {/* Search Input */}
//       <div className="home" onClick={goHome} role="button" aria-label="Home">
//         <img className="logo" src="/ecom.png" alt="E-commerce Home" />
//         Home
//       </div>
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         aria-label="Search Products"
//       />

//       {/* Right Section */}
//       <div className="navbar-right">
//         {/* Dark Mode Toggle */}
//         <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
//           {darkMode ? <MdLightMode /> : <MdOutlineLightMode />}
//         </button>

//         {/* Cart Button */}
//         <button className="cart-button" onClick={() => navigate("/cart")} aria-label="Cart">
//           <FaShoppingCart size={24} />
//           {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
//         </button>

//         {/* User Authentication */}
//         <div className="auth-buttons">
//           {user ? (
//             <>
//               <span>{user.displayName || user.email}</span>
//               <button className="logout-button" onClick={handleSignOut} aria-label="Logout">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button className="signin-btn" onClick={handleLogin} aria-label="Sign in with Google">
//               <FcGoogle /> <span>Sign in with Google</span>
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//refein look//

import React, { useCallback, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser, searchQuery, setSearchQuery, darkMode, setDarkMode, totalItems } = useAppContext();
  const navigate = useNavigate();

  // Handle sign out
  const handleSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => console.error("Error signing out: ", error));
  }, [setUser]);

  // Handle Firebase login
  const handleLogin = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => console.error("Error signing in: ", error));
  }, [setUser]);

  // Toggle Dark Mode
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  // Apply dark mode globally
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Redirect to Home Page
  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <nav className="navbar">
      {/* Search Input */}
      <div className="home" onClick={goHome} role="button" aria-label="Home">
        <img className="logo" src="/ecom.png" alt="E-commerce Home" />
        Home
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search Products"
      />

      {/* Right Section */}
      <div className="navbar-right">
        {/* Dark Mode Toggle */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {darkMode ? <MdLightMode /> : <MdOutlineLightMode />}
        </button>

        {/* Cart Button */}
        <button className="cart-button" onClick={() => navigate("/cart")} aria-label="Cart">
          <FaShoppingCart size={24} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>

        {/* User Authentication */}
        <div className="auth-buttons">
          {user ? (
            <>
              <span>{user.displayName || user.email}</span>
              <button className="logout-button" onClick={handleSignOut} aria-label="Logout">
                Logout
              </button>
            </>
          ) : (
            <button className="signin-btn" onClick={handleLogin} aria-label="Sign in with Google">
              <FcGoogle /> <span>Sign in with Google</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
