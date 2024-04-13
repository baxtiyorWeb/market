import { Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonUI from "../../ui/button/Button";
import SpinLoading from "../../ui/loading/spinLoading";
import useGenerateuuid from "./../../hooks/useGenerateuuid";
export default function RegisterComponent() {
  const { generateuiid } = useGenerateuuid();
  const [phone, setPhone] = useState("");

  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const registerPhoneOrPhone = async () => {
    // Cookie-larni olish
    const generateUId = generateuiid();

    try {
      setisLoading(true);
      const data = await axios.post(
        `http://95.130.227.131:8080/api/v1/authority/register-by-phone`,
        null,
        {
          params: { phone: phone },
          headers: {
            accept: "*/*",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
            secretKey: generateUId,
          },
          xsrfCookieName: "XSRF-TOKEN",
        },
      );

      setPhone("");
      navigate("/auth/confirm");
      localStorage.setItem("secretKey", generateUId);
    } catch (error) {
      console.log(error.message);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div>
      <h1 className="mb-5 mt-3 text-center text-2xl">
        Ro&apos;yxatdan o&apos;tish
      </h1>
      <div></div>
      <div className="mt-10 flex h-full w-full flex-col items-center justify-center ">
        <span className="mb-3 w-full text-left">tel raqamingizni kiriting</span>
        <div className="w-full">
          <span className="text-xl">+998</span>
          <Input
            type="number"
            placeholder="99 999 99 99"
            onChange={(e) => setPhone(e.target.value)}
            maxLength={9}
            value={phone}
            className="h-14 w-[328px] rounded-md p-3 text-xl outline-none"
          />
        </div>
        {phone.length >= 10 ? (
          <span className="text-red-300">
            raqam {phone.length === 9 ? phone.length : 9} dan oshib ketdi
          </span>
        ) : (
          ""
        )}
        <div className="send-details">
          <ButtonUI
            disabled={phone.length === 9 ? false : true}
            onClick={() => registerPhoneOrPhone()}
          >
            {isLoading ? <SpinLoading /> : "Davom etish"}
          </ButtonUI>
        </div>

        <Link to={"/auth/login"}>
          <span className="cursor-pointer text-sky-500 hover:underline">
            ro&apos;yxatdan o&apos;tganmisiz
          </span>
        </Link>
      </div>
    </div>
  );
}
