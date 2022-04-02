import React from 'react';
import './scss/app.scss';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from "./Layout"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="products" element={<Products />}/>
          <Route path="*" element={<Navigate replace to="/" />}/>
        </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);