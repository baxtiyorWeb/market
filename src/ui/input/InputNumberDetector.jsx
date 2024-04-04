import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/api/api";
import SpinLoading from "../loading/spinLoading";

export default function InputNumberDetector() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const cookie = Cookies.get("JSESSIONID", {
    domain: "95.130.227.131",
    path: "/api/v1",
  });
  console.log(cookie);
  const registerPhoneOrPhone = async () => {
    try {
      setLoading(true);
      const data = await api.post(
        `http://95.130.227.131:8080/api/v1/authority/register-by-gmail?email=${phone}`,
      );
      console.log(data.data);
      setPhone("");
      sessionStorage.setItem("phone", phone);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const confimCodeSMS = async () => {
    setLoading(true);
    try {
      const res = await api.post(
        "/authority/code-confirm",
        JSON.stringify({
          code: confirm,
        }),

        {
          withCredentials: true,
          // withCredentials: true,
          headers: {
            accept: "*/*",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
          },
          // referrerPolicy: "strict-origin-when-cross-origin",
          // "Access-Control-Allow-Headers": "Accept",
          // "Access-Control-Request-Headers": " Content-Type, x-requested-with",
          // "Access-Control-Allow-Origin": "",
          // credentials: "include",
          " Access-Control-Allow-Methods": "POST",
        },
      );

      const Headers = res.status;
      console.log(Headers);
    } catch (error) {
      throw new Error(`Error: ${error}`);
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
              <input
                type="text"
                value={confirm}
                maxLength={4}
                className="mb-1 mt-3 h-[50px] w-[80%] rounded-md p-3 outline-none"
                onChange={(e) => setConfirm(e.target.value)}
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
              <div className="send-details">
                <button
                  disabled={confirm === "" ? true : confirm.length < 4}
                  className="mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-[#1D828E] text-white disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
                  onClick={() => confimCodeSMS()}
                >
                  {loading ? <SpinLoading /> : "kodni tekshirish"}
                </button>
              </div>
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
