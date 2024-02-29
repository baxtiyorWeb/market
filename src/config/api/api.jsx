import axios from "axios";

export default axios.create({
  baseURL: "http://kelishamiz.uz/api/v1",
  headers: {
    "ngrok-skip-browser-warning": true,
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401) {
      const response = await axios.post(
        "refresh",
        {},
        { withCredentials: true },
      );
      if (response.status === 200) {
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${localStorage.getItem("refreshToken")}`;
        return axios(error.config);
      }
    }
    return error;
  },
);
