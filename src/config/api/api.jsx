// Separate refresh token function

import axios from "axios";

const api = axios.create({
  baseURL: "http://95.130.227.131:8080/api/v1",
  headers: {
    "ngrok-skip-browser-warning": true,
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    SecretKey: `${localStorage.getItem("secretKey")}`,
  },
  // params: {
  // lang: getParamsLangQuery(),
  // },
});
async function refreshToken() {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post("/authority/refresh-token", {
      refreshToken,
    });
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data?.data.accessToken);
      return response.data?.data.accessToken;
    }
  } catch (error) {
    console.error("Refresh token error", error);
    // Handle error, potentially redirect to login
  }
}

// Updated interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshToken();
        if (newAccessToken) {
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(error.config);
        }
      } catch (refreshError) {
        console.error("Refresh token error", refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
