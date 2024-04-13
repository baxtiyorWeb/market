import { Input, message } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/api/api";
import ButtonUI from "../../ui/button/Button";

export default function LoginComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const loginNameAndPassword = async () => {
    try {
      setisLoading(true);
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
    } finally {
      setisLoading(false);
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
      <div className="flex flex-col items-center justify-center">
        <span className="mb-1 w-full text-left">loginingizni kiriting</span>
        <Input
          type="text"
          placeholder="login"
          className="mt-3 h-14  w-[328px] rounded-lg p-3  text-xl outline-none"
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="mb-1 mt-3 w-full text-left">
          parolingizni kiriting
        </span>
        <Input
          type="password"
          placeholder="password"
          className="mt-3 h-14  w-[328px] rounded-lg p-3  text-xl outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="send-details">
        <ButtonUI
          loading={isLoading}
          disabled={login != "" && password != "" ? false : true}
          className="mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-[#1D828E] text-white hover:text-[#fff] disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
          onClick={() => loginNameAndPassword()}
        >
          yuborish
        </ButtonUI>
      </div>
      <Link to={"/auth/register"}>
        <span className="cursor-pointer text-sky-500 hover:underline">
          ro&apos;yxatdan o&apos;tmaganmisiz
        </span>
      </Link>
    </div>
  );
}
