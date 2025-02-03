import React from "react";
import { useAppContext } from "../context/AppContext";

const Pagination = ({ totalItems }) => {
  const { currentPage, setCurrentPage, itemsPerPage } = useAppContext();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
      ))}
    </div>
  );
};

export default Pagination;
