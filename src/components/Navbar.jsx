


// import React from "react";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import { useAppContext } from "../context/AppContext";

// const Navbar = () => {
//   const { user, setUser, searchQuery, setSearchQuery, darkMode, setDarkMode } = useAppContext();

//   // Handle sign out
//   const handleSignOut = () => {
//     googleLogout();  // Logs out the user from Google
//     setUser(null);    // Clears the user from context
//     localStorage.removeItem("user");  // Clears user data from localStorage
//   };

//   // Handle successful Google login
//   const handleLoginSuccess = (res) => {
//     const profile = res.profileObj;
//     setUser(profile);  // Sets the user profile in context
//     localStorage.setItem("user", JSON.stringify(profile)); // Optionally store user in localStorage
//   };

//   return (
//     <nav className="navbar">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
//       {user ? (
//         <div>
//           <span>Welcome, {user.name}</span> {/* Display user's name */}
//           <button onClick={handleSignOut}>Logout</button>  {/* Logout button */}
//         </div>
//       ) : (
//         <GoogleLogin
//           onSuccess={handleLoginSuccess}
//           onError={() => console.log("Login Failed")}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setUser, searchQuery, setSearchQuery, darkMode, setDarkMode } = useAppContext();

  // Handle sign out
  const handleSignOut = () => {
    googleLogout();  // Logs out the user from Google
    setUser(null);    // Clears the user from context
    localStorage.removeItem("user");  // Clears user data from localStorage
  };

  // Handle successful Google login
  const handleLoginSuccess = (res) => {
    const profile = res.profileObj;
    setUser(profile);  // Sets the user profile in context
    localStorage.setItem("user", JSON.stringify(profile)); // Store user data in localStorage
  };

  // On component mount, check for stored user data
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser); // If user data exists, set it in context
      } catch (e) {
        console.error("Error parsing user data from localStorage", e);
      }
    }
  }, [setUser]);

  // On component mount, check for stored darkMode preference
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      try {
        setDarkMode(JSON.parse(storedDarkMode)); // Set dark mode based on localStorage value
      } catch (e) {
        console.error("Error parsing darkMode data from localStorage", e);
      }
    }
  }, [setDarkMode]);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode)); // Persist dark mode preference
  };

  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {user ? (
        <div>
          <span>Welcome, {user.name}</span> {/* Display user's name */}
          <button onClick={handleSignOut}>Logout</button> {/* Logout button */}
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
      )}
    </nav>
  );
};

export default Navbar;
