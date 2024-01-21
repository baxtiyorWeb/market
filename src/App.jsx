import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import "./response.css";
import Loading from "./ui/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

// routes

const App = () => {
  const [scroll, setScroll] = useState(null);
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout scroll={scroll} setScroll={setScroll} />}
      >
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home scroll={scroll} setScroll={setScroll} />
            </React.Suspense>
          }
        />
        <Route
          path="/details/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <Details scroll={scroll} />
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
