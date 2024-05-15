import { Input, Spin } from "antd";
import { useEffect, useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash, FaTelegram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
  const loginNameAndPassword = async (e) => {
    e.preventDefault();
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
    <form
      onSubmit={loginNameAndPassword}
      className="flex h-[80%] w-[80%] flex-col items-center justify-center "
    >
      <h1 className="mb-5 mt-3 text-center text-2xl">Dasturga kirish</h1>
      <div className=" flex w-full flex-col items-start justify-center ">
        <span className="mb-1 w-auto text-left">loginingizni kiriting</span>
        <Input
          type="text"
          placeholder="login"
          className="mb-3 mt-3 h-14  w-full rounded-[5px_!important] p-3  text-xl outline-none"
          onChange={(e) => setSignIn({ ...signIn, username: e.target.value })}
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center ">
        <span className="mb-1 w-auto text-left">parolingizni kiriting</span>
        <Input
          type={inputType ? "password" : "text"}
          placeholder="password"
          className="mt-3 h-14  w-full rounded-[5px_!important] p-3  text-xl outline-none"
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
      <div className="send-details w-full">
        <ButtonUI
          disabled={
            signIn.username != "" && signIn.password != "" ? false : true
          }
          className="mb-5 mt-5 h-[50px] w-full rounded-md bg-bgColor text-white hover:text-[#fff] disabled:cursor-not-allowed disabled:bg-bgColor/60"
          type={"submit"}
        >
          {isLoading ? (
            <Spin />
          ) : (
            <span className="flex items-center justify-center">
              Kirish <FaArrowRight className="mx-3" />
            </span>
          )}
        </ButtonUI>
      </div>
      <span>yoki</span>

      <div className="w-full">
        <ButtonUI className="mb-1 mt-3 flex h-[50px] w-full items-center justify-start rounded-md border border-borderColor bg-whiteTextColor px-5 text-textColor disabled:cursor-not-allowed disabled:bg-bgColor/60">
          <FcGoogle className="text t text-3xl" />
          <span className="m-auto">Google orqali kirish</span>
        </ButtonUI>
      </div>
      <div className="w-full">
        <ButtonUI className="mb-1 mt-3 flex h-[50px] w-full items-center justify-start rounded-md border border-borderColor bg-whiteTextColor px-5 text-textColor disabled:cursor-not-allowed disabled:bg-bgColor/60">
          <FaTelegram className="text text-3xl text-blue-500" />
          <span className="m-auto">Google orqali kirish</span>
        </ButtonUI>
      </div>
      <Link to={"/auth/register"} className="my-3 w-full text-end">
        <span className="cursor-pointer text-sky-500 hover:underline">
          ro&apos;yxatdan o&apos;tish
        </span>
      </Link>
    </form>
  );
}
