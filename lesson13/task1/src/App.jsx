import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Contacts.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import Products from './Products.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
