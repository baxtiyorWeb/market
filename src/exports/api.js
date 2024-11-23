import { message } from "antd";
import api from "./../config/api/api";

/* -------------------------------------------------------------------------- */
/*                                REGISTRATION                                */
/* -------------------------------------------------------------------------- */

export const registerLoginAndPassword = async (data) => {
  const secretKey = localStorage.getItem("secretKey");
  const res = await api.post("/authority/register-login-password", data, {
    headers: {
      "Content-Type": "application/json",
      xsrfCookieName: "JSESSIONID",
      secretKey: secretKey,
    },
  });

  localStorage.setItem("accessToken", res.data?.data?.tokenData?.accessToken);
  localStorage.setItem("refreshToken", res.data?.data?.tokenData?.refreshToken);
  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                 CATEGORY                                   */
/* -------------------------------------------------------------------------- */

// GET ALL CATEGORIES
export const getCategories = async () => {
  const res = await api.get("/category/all");
  return res.data;
};

// GET CATEGORY LIST
export const getCategoriesRootListSticky = async () => {
  const res = await api.get("/category/list?page=0&size=15&parentId=");
  return res.data;
};

// GET CATEGORY LIST BY PARENT ID
export const getCategoriesRootListById = async (id) => {
  const res = await api.get(`/category/list?page=0&size=10&parentId=${id}`);
  return res.data;
};

// GET CATEGORY BY ID
export const getCategoryById = async (id) => {
  const res = await api.get(`/category/${id}`);
  return res.data;
};

// GET CATEGORY PROPERTIES BY ID
export const getCategoryPropertiesById = async (id) => {
  const param = new URLSearchParams()
  const districtId = param.get("districtId");
  const res = await api.get(`/category/properties/${id}`);
  return res.data;
};

// GET CATEGORY FILTER BY ID
export const getCategoryFilterById = async (id) => {
  if (id === null || id === false) return false;
  const res = await api.get(`/category/get-filters/${id}`);
  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                  PRODUCT                                   */
/* -------------------------------------------------------------------------- */

// CREATE PRODUCT
export const createProduct = async (data) => {
  const res = await api.post("/product", data, {
    headers: { "Content-Type": "application/json" },
  });
  message.success("Product added successfully");
  return res.data;
};

// GET PRODUCTS WITH PAGINATION
export const getProducts = async ({ page }) => {
  const res = await api.get(`/product/list?page=${page}&size=10`);
  return res.data?.data?.content;
};

// GET PRODUCTS BY CATEGORY ID
export const getProductByCategoryId = async (id) => {
  const res = await api.get(`/product/list?page=0&size=10&categoryId=${id}`);
  return res.data;
};

// SEARCH PRODUCTS WITH FILTER
export const searchProducts = async (searchValue) => {
  const res = await api.get(
    `/product/list?page=0&size=10&search=${searchValue}`,
  );
  return res.data;
};

// GET PRODUCT STRING VALUES
export const getProductStringValues = async (categoryId, propertyId) => {
  if (categoryId === null || categoryId === false) return false;
  if (propertyId === null || propertyId === false) return false;
  console.log(categoryId, propertyId);
  const res = await api.get(`/product/string-values`, {
    params: {
      categoryId,
      propertyId,
    },
  });
  return res.data;
};

// GET PRODUCTS WITH CATEGORY FILTER
export const getProductsByCategoryFilter = async (search) => {
  if (search === null || search === false) return false;
  const response = await api.post(
    "/product/list",
    {
      search: search || "",
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      userId: 0,
      valueFilter: [],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                   FILES                                    */
/* -------------------------------------------------------------------------- */

// FILE UPLOAD
export const uploadFile = async (data) => {
  const res = await api.post(
    `/file/upload`,
    { file: data },
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  message.success("File uploaded successfully");
  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                  USER                                      */
/* -------------------------------------------------------------------------- */

// UPDATE USER DATA
export const updateUserData = async (data) => {
  const res = await api.put(`/user/26`, data);
  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                 MISCELLANEOUS                              */
/* -------------------------------------------------------------------------- */

// GET DISTRICT BY ID
export const getDistrictById = async (id) => {

  const res = await api.get(`/district/all/${id || 1}`);
  return res.data;
};

// GET ALL REGIONS
export const getRegions = async () => {
  const res = await api.get("/region/all");
  return res.data;
};

// GET ALL PAYMENT TYPES
export const getPaymentTypes = async () => {
  const res = await api.get("/payment-type/all");
  return res.data;
};

// GET ALL SELL TYPES
export const getSellTypes = async () => {
  const res = await api.get("/sell-type/all");
  return res.data;
};

// DELETE FAVORITE PRODUCT
export const deleteFavoriteProduct = async (id) => {
  return (await api.post(`favorite-product/remove?productId=${id}`)).data;
};
