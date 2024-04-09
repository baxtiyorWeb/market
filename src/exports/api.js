import api from "./../config/api/api";
// get categories
export const getCategories = async () => {
  const res = await api.get("/category/all");
  return res.data;
};

// Create Read products

export const createCategories = async (data) => {
  const res = await api.post("/category", data);
  return res.data;
};

export const registerLoginAndPassword = async (data) => {
  const secretKey = localStorage.getItem("secretKey");
  console.log(secretKey);
  const res = await api.post("/authority/register-login-password", data, {
    headers: {
      "Content-Type": "application/json",
      xsrfCookieName: "JSESSIONID",
      secretKey: secretKey,
    },
  });

  localStorage.setItem("accessToken", res.data?.data?.tokenData?.accessToken);
  localStorage.setItem("refreshToken", res.data?.data?.tokenData?.refreshToken);
  window.location.href = "/profile";
  return res.data;
};

export const getDistrict = async () => {
  const res = await api.get("/district/all");
  console.log(res.data);
  return res.data;
};
