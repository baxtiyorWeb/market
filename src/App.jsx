import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
