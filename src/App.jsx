import React, { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Confirm from "./components/auth/otpCodeConfirmComponent";
import AuthLayout from "./layout/authLayout";
import Layout from "./layout/layout";
import CreateUser from "./pages/auth/createUser";
import CategoryPage from "./pages/category/CategoryPage";
import FilterPage from "./pages/filter/FilterPage";
import NotFound from "./pages/not-found";
import AddProductCategoryLayout from "./pages/product-form/productForm";
import Profile from "./pages/profile/Profile";
import "./response.css";
import Loading from "./ui/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const Register = lazy(() => import("./pages/auth/Register"));
const Login = lazy(() => import("./pages/auth/Login"));
const ChildCategories = lazy(
  () => import("./pages/categories/childCategories"),
);
const ProfileLayout = lazy(() => import("./layout/profileLayout"));
const CategoriesLayout = lazy(() => import("./layout/categoriesLayout"));
// routes

const App = () => {
  const [scroll, setScroll] = useState(null);
  return (
    <>
      <Helmet>
        <title>Kelishamiz.uz saytiga hush kelibsiz</title>
        <link rel="stylesheet" href="http://95.130.227.131" />
      </Helmet>
      <div className="fixed z-[10000] ml-5 p-2"></div>

      <Routes>
        <Route exact path="/" element={<Layout />}>
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
          <Route
            path="/product/search_result/:name"
            element={
              <React.Suspense fallback={<Loading />}>
                <FilterPage scroll={scroll} />
              </React.Suspense>
            }
          />

          <Route
            path="/product-form/add-product"
            element={
              <React.Suspense fallback={<Loading />}>
                <AddProductCategoryLayout />
              </React.Suspense>
            }
          ></Route>

          {/* profile layout */}

          <Route
            loader={<Loading />}
            path="/category"
            element={
              <React.Suspense fallback={<Loading />}>
                <CategoriesLayout />
              </React.Suspense>
            }
          >
            <Route
              loader={<Loading />}
              path="/category/next"
              element={
                <React.Suspense fallback={<Loading />}>
                  <CategoryPage />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/category/:id"
              element={
                <React.Suspense fallback={<Loading />}>
                  <ChildCategories />
                </React.Suspense>
              }
            />
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
      </Routes>
    </>
  );
};

export default App;
