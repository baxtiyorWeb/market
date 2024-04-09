import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGenerateuuid from "../../hooks/useGenerateuuid";
import SpinLoading from "../loading/spinLoading";
export default function InputNumberDetector() {
  const { generateuiid } = useGenerateuuid();
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const registerPhoneOrPhone = async () => {
    // Cookie-larni olish
    const generateUId = generateuiid();

    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div>
        <h1 className="text relative bottom-[80px] text-[30px] text-teal-700">
          <span className="text text-[40px] text-teal-600">Kelishamiz.uz</span>{" "}
          saytiga hush kelibsiz
        </h1>
      </div>
      <div className="input-container">
        <div className="m-auto w-[800px] rounded-md border-2 border-teal-500">
          <h1 className="text-center">registrasiyadan o&apos; ting</h1>
          <div className="flex h-[600px] flex-col items-center justify-center rounded-md">
            <div className="flex w-full flex-col items-center justify-center">
              <span className="mb-3 block">telefon raqamingizni kiriting</span>
              <input
                type="text"
                className="h-[50px] w-[80%] rounded-md p-3 outline-none"
                placeholder="tel 99 999 99 9s9"
                onChange={(e) => setPhone(e.target.value)}
                maxLength={35}
                value={phone}
              />
            </div>
            <div className="send-details">
              <button
                disabled={(phone.length === 0 < true) === phone.length >= 9}
                className="mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-[#1D828E] text-white disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
                onClick={() => registerPhoneOrPhone()}
              >
                {loading ? <SpinLoading /> : "yuborish"}
              </button>
            </div>

            <span className="cursor-pointer text-sky-500 hover:underline">
              ro&apos;yxatdan o&apos;tganmisiz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
