import React from "react";
import { useAppContext } from "../context/AppContext";

const Pagination = ({ totalItems }) => {
  const { currentPage, setCurrentPage, itemsPerPage } = useAppContext();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="page-content">
      {/* Product List Grid */}
      <div className="product-grid">
        {/* Render your products here */}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagebtn" onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`pagebtn {currentPage === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}
        
        <button  className="pagebtn" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
