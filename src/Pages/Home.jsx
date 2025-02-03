import React from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

const Home = () => (
  <div className="container">
    <Sidebar />
    <ProductList />
  </div>
);

export default Home;
