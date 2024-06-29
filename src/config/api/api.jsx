import axios from "axios";

const api = axios.create({
  baseURL: "http://95.130.227.131:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 400 && !originalRequest._retry) {
      // originalRequest._retry = true;
      console.log(error.response.status);
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post(
        "http://95.130.227.131:8080/api/v1/authority/refresh-token",
        {
          refreshToken: refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        const newAccessToken = response.data.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
