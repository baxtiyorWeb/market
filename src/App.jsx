import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Confirm from "./components/auth/confirm";
import AddProductCategoryLayout from "./layout/addProductCategoryLayout";
import AuthLayout from "./layout/authLayout";
import Layout from "./layout/layout";
import CreateUser from "./pages/auth/createUser";
import NotFound from "./pages/not-found";
import Profile from "./pages/profile/Profile";
import "./response.css";
import Loading from "./ui/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Register = lazy(() => import("./pages/auth/Register"));
const Login = lazy(() => import("./pages/auth/Login"));
const ProfileLayout = lazy(() => import("./layout/profileLayout"));

// routes

const App = () => {
  const [scroll, setScroll] = useState(null);
  return (
    <>
      <div className="fixed z-[10000] ml-5 p-2"></div>
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
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <NotFound scroll={scroll} setScroll={setScroll} />
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

          <Route path="/product-form" element={<AddProductCategoryLayout />}>
            <Route
              path="add-product"
              element={
                <React.Suspense fallback={<Loading />}>
                  <AddProduct />
                </React.Suspense>
              }
            />
          </Route>

          {/* profile layout */}

          <Route
            path="/profile"
            element={
              <React.Suspense fallback={<Loading />}>
                <ProfileLayout />
              </React.Suspense>
            }
          >
            <Route path="/profile/dashboard" element={<Profile />}></Route>
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route
            path="/auth/register"
            element={
              <React.Suspense fallback={<Loading />}>
                <Register />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/auth/login"
            element={
              <React.Suspense fallback={<Loading />}>
                <Login />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/auth/confirm"
            element={
              <React.Suspense fallback={<Loading />}>
                <Confirm />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/auth/create"
            element={
              <React.Suspense fallback={<Loading />}>
                <CreateUser />
              </React.Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
