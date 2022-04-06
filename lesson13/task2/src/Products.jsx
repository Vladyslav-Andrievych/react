import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Product from './Product.jsx';

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":productId" element={<Product />}></Route>
        <Route path="" element={<span>Select a product please</span>}></Route>
      </Routes>
    </div>
  );
};

export default Products;
