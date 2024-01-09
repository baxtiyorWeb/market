import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Loading from "./ui/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <Details />
            </React.Suspense>
          }
        />
        <Route
          path="/add-product"
          element={
            <React.Suspense fallback={<Loading />}>
              <AddProduct />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
