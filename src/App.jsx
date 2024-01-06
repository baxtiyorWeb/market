import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default App;
