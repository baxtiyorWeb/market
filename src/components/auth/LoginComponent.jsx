import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginNameAndPassword = async () => {
    try {
      const { data } = await axios.post(
        "http://95.130.227.131:8080/api/v1/authority/sign-in",
        {
          username: login,
          password: password,
        },
      );

      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

      navigate("/profile/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const getData = async () => {
      try {
        const data = await axios.get(
          "http://95.130.227.131:8080/api/v1/authority/all",
          config,
        );

        console.log(data);
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
