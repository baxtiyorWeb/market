import { Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
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
        <span className="mb-3 w-full text-left">
          telefon raqamingizni kiriting
        </span>
        <div className="relative w-full">
          <span
            className={`absolute left-0 top-[15px] z-10 text-xl ${
              phone.length > 0
                ? `${phone.length >= 10 ? "text-red-500 transition-all" : ""}`
                : "text-[#BFBFBF]"
            }`}
          >
            {/* `absolute left-0 top-[15px] z-10 text-xl text-[${
              phone.length > 10 || phone?.length > 0 ? "#FF4D4E" : "#BFBFBF"
            }]` */}
            +998
          </span>
          <Input
            type="number"
            placeholder="99 999 99 99"
            onChange={(e) => setPhone(e.target.value)}
            maxLength={9}
            value={phone}
            className="h-14 w-[328px] rounded-md p-3 indent-10 text-xl outline-none"
          />
        </div>
        {phone.length >= 10 ? (
          <span className="text-red-300">
            telefon raqam no&apos;to&apos;g&apos;ri kiritildi
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

        <span> yoki </span>

        <hr className="my-1 w-full" />
        <span className="my-3">
          ijtmoiy tarmoqlar orqali ro&apos;yxatdan o&apos;ting
        </span>
        <div className="flex flex-col items-center justify-center">
          <button className="m-1 flex h-12 w-[180px] items-center justify-center rounded-md border px-1">
            <FcGoogle className="mx-2 h-8 w-8 cursor-pointer" />
            <span className="text-sm text-textColor">google +</span>
          </button>
          <button className="m-1 flex h-12 w-[180px] items-center justify-center rounded-md border px-1">
            <FaTelegram className="mx-2 h-8 w-8 cursor-pointer text-blue-500" />
            <span className="text-sm text-textColor">telegram</span>
          </button>
        </div>
      </div>
    </div>
  );
}
