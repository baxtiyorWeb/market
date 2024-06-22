import axios from "axios";

// Function to get the language parameter
function getParamsLangQuery() {
  return localStorage.getItem("lang");
}

const api = axios.create({
  baseURL: "http://95.130.227.131:8080/api/v1",
  headers: {
    "ngrok-skip-browser-warning": true,
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    SecretKey: `${localStorage.getItem("secretKey")}`,
  },
  // params: {
  //   lang: getParamsLangQuery(),
  // },
});

// Interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await api.post(
          "/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data?.data.accessToken);
          error.config.headers["Authorization"] =
            `Bearer ${response.data.data.accessToken}`;
          return api(error.config);
        }
      } catch (refreshError) {
        // Handle refresh token error (e.g., redirect to login)
        console.error("Refresh token error", refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
