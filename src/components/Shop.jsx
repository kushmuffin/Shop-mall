import React, { useState } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products';
import Product from "./Product";

export default function Shop({ children }) {
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (event) => {
    setTerm(event.target.value);
    setCurrentPage(1); // 搜索後回第一頁
  };

  const filteredProducts = DUMMY_PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(term.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section id="shop">
      <div className="title">
        <h2>Knowledge For Everyone</h2>      
          <div>
          <span>您想尋找的書: </span>
            <input className="search"
            type="text"
            placeholder="search something..."
            value={term}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <ul id="products">{children}</ul> */}
      <ul id="products">
        {currentItems.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          上一頁
        </button>
        <span>
          第 {currentPage} 頁，共 {totalPages} 頁
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          下一頁
        </button>
      </div>
    </section>
  );
}
