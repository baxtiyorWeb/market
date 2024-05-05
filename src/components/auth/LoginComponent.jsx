import { Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/api/api";
import { useAuth } from "../../context/AuthContext";
import ButtonUI from "../../ui/button/Button";

export default function LoginComponent() {
  const { login } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [inputType, setInputType] = useState("text");
  const navigate = useNavigate();
  const loginNameAndPassword = async () => {
    try {
      setisLoading(true);
      const { data, status } = await api.post("/authority/sign-in", {
        username: username,
        password: password,
      });

      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

      if (status === 200) {
        message.success("login successfully");
      }

      login({ username });
      // window.location.href = "/";
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
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-5 mt-3 text-center text-2xl">Dasturga kirish</h1>
        <div className="mt-10 flex flex-col items-center justify-center">
          <span className="mb-1 w-full text-left">loginingizni kiriting</span>
          <Input
            type="text"
            placeholder="login"
            className="mt-3 h-14  w-[328px] rounded-lg p-3  text-xl outline-none"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <span className="mb-1 mt-3 w-full text-left">
            parolingizni kiriting
          </span>
          <Input
            type={inputType ? "password" : "text"}
            placeholder="password"
            className="mt-3 h-14  w-[328px] rounded-lg p-3  text-xl outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute bottom-5 right-5 cursor-pointer"
            onClick={() => setInputType(!inputType)}
          >
            {inputType ? (
              <FaEye className="text-lg" />
            ) : (
              <FaEyeSlash className="text-lg" />
            )}
          </span>
        </div>
        <div className="send-details">
          <ButtonUI
            disabled={login != "" && password != "" ? false : true}
            className="mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-bgColor text-white hover:text-[#fff] disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
            onClick={() => loginNameAndPassword()}
          >
            {isLoading ? <Spin /> : "Kirish"}
          </ButtonUI>
        </div>
        <Link to={"/auth/register"}>
          <span className="cursor-pointer text-sky-500 hover:underline">
            ro&apos;yxatdan o&apos;tish
          </span>
        </Link>
      </div>
    </>
  );
}
