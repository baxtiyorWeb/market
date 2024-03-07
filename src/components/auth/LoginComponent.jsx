import { message } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../config/api/api"

export default function LoginComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginNameAndPassword = async () => {
    try {
      const { data, status } = await api.post("/authority/sign-in", {
        username: login,
        password: password,
      });

      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

      if (status === 200) {
        message.success("login successfully");
      }

      navigate("/profile/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await api.get("/authority/all");

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="login"
        className="mt-3  w-[300px] rounded-lg  p-3 outline-none"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="mt-3  w-[300px] rounded-lg  p-3 outline-none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginNameAndPassword}>send</button>
    </div>
  );
}
