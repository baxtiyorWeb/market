import axios from "axios";

export default axios.create({
  baseURL: "http://95.130.227.131:8080",
  headers: {
    "ngrok-skip-browser-warning": true,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
