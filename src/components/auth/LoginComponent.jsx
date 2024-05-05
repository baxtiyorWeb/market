import { Input, Spin } from "antd";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from "../../config/api/api";
import { useAuth } from "../../context/AuthContext";
import ButtonUI from "../../ui/button/Button";

export default function LoginComponent() {
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const [inputType, setInputType] = useState("text");
  const navigate = useNavigate();
  const { loginAction } = useAuth();
  const loginNameAndPassword = async () => {
    try {
      setisLoading(true);

      loginAction(signIn);
      // window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    } finally {
      setisLoading(false);
    }
  };

  const authCheck = async () => {
    const res = await api.get("/user/1");
    console.log(res.data);
    if (res.data) {
      navigate("/profile/dashboard?tab=1");
    }
  };
  useEffect(() => {
    authCheck();
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
            onChange={(e) => setSignIn({ ...signIn, username: e.target.value })}
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
            onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
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
            disabled={
              signIn.username != "" && signIn.password != "" ? false : true
            }
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
