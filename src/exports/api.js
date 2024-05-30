import { message } from "antd";
import api from "./../config/api/api";

/* -------------------------------------------------------------------------- */
/*                                REGISTRATION                                */
/* -------------------------------------------------------------------------- */

// LOGIN AND PASSWORD REGISTER

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
/*                           cateogires section api                           */
/* -------------------------------------------------------------------------- */

//  GET CATEGORY

export const getCategories = async () => {
  const res = await api.get("/category/all");
  return res.data;
};

// GET CATEGORY LIST

export const getCategoriesRootListSticky = async () => {
  const res = await api.get(`/category/list?page=0&size=8&parentId=`);
  return res.data;
};

// GET CATEGORY LIST PARENT ID

export const getCategoriesRootLisId = async (id) => {
  const res = await api.get(`/category/list?page=0&size=50&parentId=${id}`);
  return res.data;
};

// GET CATEGORY ID
export const getCategoriesWithId = async (id) => {
  const res = await api.get(`/category/${id}`);
  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                   CATEGORY                                  */
/* -------------------------------------------------------------------------- */

// CREATE PRODUCT

export const getDistrict = async (id) => {
  const res = await api.get(`/district/all/${id}`);
  return res.data;
};

export const getCategoryPropertiesId = async (id) => {
  const res = await api.get(`/category/properties/${id}`);
  return res.data;
};

export const getProducts = async ({ page }) => {
  console.log(page);
  const res = await api.get(`/product/list?page=${page}&size=10`);
  return res.data?.data?.content;
};

export const getProductWithCategoryId = async (id) => {
  const res = await api.get(`/product/list?page=0&size=10&categoryId=${id}`);
  return res.data;
};

export const getproductgetFileterSearch = async (searchValue) => {
  const res = await api.get(
    `product/list?page=0&size=10&search=${searchValue}`,
  );
  return res.data;
};

export const createProduct = async (data) => {
  const res = await api.post("/product", data, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(res.data?.data);
  message.success("product qo'shildi");
  return res.data;
};

export const fileUplaodLoadedData = async (data) => {
  const res = await api.post(
    `/file/upload`,
    {
      file: data,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  console.log(res.data?.data);
  message.success("rasm yuklandi");
  return res.data;
};

export const createUserData = async (data) => {
  const res = await api.put(`/user/5`, data);
  if (res.data) console.log("ok");
  return res.data;
};

export const getRegions = async () => {
  const res = await api.get("/region/all");
  return res.data;
};

// filter product for api returns

export const productWithCategoryFilter = async (search, id) => {
  // if (id == null || search == null) return false;

  const response = await api.get("/product/list", {
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      categoryId: 0,
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      userId: 0,
      valueFilter: [],
    }),
  });
  return response.data;
};
export const getProductWithCategoryFilter = async (id) => {
  const res = await api.get(`/category/list?page=0&size=20&parentId=${id}`);
  return res.data;
};

export const deleteFavorite = async (id) => {
  return (await api.post(`favorite-product/remove?productId=${id}`)).data;
};
