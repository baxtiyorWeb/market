import axios from "axios";

// function getParamsLangQuery() {
//   const lang = localStorage.getItem("lang");
//   return lang;
// }

export default axios.create({
  baseURL: "http://95.130.227.131:8080/api/v1",
  // params: {
  //   lang: getParamsLangQuery(),
  // },
  headers: {
    "ngrok-skip-browser-warning": true,
    "Content-Type": "application/json",
    Accept: "application/json",
    " Access-Control-Allow-Origin": "*",

    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    SecretKey: `${localStorage.getItem("secretKey")}`,
  },
  // withCredentials: true,
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
