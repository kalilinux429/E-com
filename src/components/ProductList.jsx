import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCart from '../components/ProductCart'
import Pagination from "../components/Pagination"

const ProductList = () => {
  const { products, searchQuery, selectedCategory, currentPage, itemsPerPage } = useAppContext();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="product-grid">
  {currentItems.length === 0 ? (
    <p>No products found</p>
  ) : (
    currentItems.map((product) => <ProductCart key={product.id} product={product} />)
  )}

  {/* Add a wrapper around Pagination */}
  <div className="pagination-container">
    <Pagination totalItems={filteredProducts.length} />
  </div>
</div>

  );
};

export default ProductList;
