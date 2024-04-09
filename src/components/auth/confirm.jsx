import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth";
import SpinLoading from "../../ui/loading/spinLoading";
export default function Confirm() {
  const [confirm, setConfirm] = useState("");
  const [open, setOpen] = useState(false);
  const { registerLoginAndPassword, setAuth, auth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const data = {
    ...auth,
  };
  console.log(data);

  if (localStorage.getItem("secretkey") == undefined) {
    // navigate("/auth/register");
  }
  const confimCodeSMS = async () => {
    setIsLoading(false);
    try {
      const secretKey = localStorage.getItem("secretKey");
      console.log(secretKey);
      const confirmCode = await axios.post(
        "http://95.130.227.131:8080/api/v1/authority/code-confirm",
        null,
        {
          params: { code: confirm },
          xsrfCookieName: "JSESSIONID",
          headers: {
            secretKey: secretKey,
          },
        },
      );
      if (confirmCode.status === 200) {
        setConfirm("");
        setOpen(true);
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {!open ? (
        <div className="flex h-[600px] flex-col items-center justify-center rounded-md">
          <div className="flex w-full flex-col items-center justify-center">
            <span className="mb-3 block">4 talik sms xabarni kiriting</span>
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
              disabled={confirm === "" ? true : confirm.length < 4}
              className="mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-[#1D828E] text-white disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
              onClick={() => confimCodeSMS()}
            >
              {isLoading ? <SpinLoading /> : "kodni tekshirish"}
            </button>
          </div>

          <span className="cursor-pointer text-sky-500 hover:underline">
            ro&apos;yxatdan o&apos;tganmisiz
          </span>
        </div>
      ) : (
        <div className="flex h-[600px] flex-col items-center justify-center rounded-md">
          <div className="flex w-full flex-col items-center justify-center">
            <span className="mb-3 block">ma&apos;lumotingizni kiritng</span>

            <input
              type="text"
              placeholder="login kiriting"
              className="mb-1 mt-3 h-[50px] w-[80%] rounded-md p-3 outline-none"
              onChange={(e) => setAuth({ ...auth, login: e.target.value })}
            />
            <input
              type="text"
              placeholder="parol kiriting"
              className="mb-1 mt-3 h-[50px] w-[80%] rounded-md p-3 outline-none"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
            />
            <input
              type="text"
              placeholder="parolni qayta  kiriting"
              className="mb-1 mt-3 h-[50px] w-[80%] rounded-md p-3 outline-none"
              onChange={(e) => setAuth({ ...auth, rePassword: e.target.value })}
            />
          </div>
          <div className="send-details">
            <button
              className="mb-5 mt-5 h-[50px] w-[328px] rounded-md bg-[#1D828E] text-white disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
              onClick={() => registerLoginAndPassword(data)}
            >
              {isLoading ? <SpinLoading /> : "kodni tekshirish"}
            </button>
          </div>

          <span className="cursor-pointer text-sky-500 hover:underline">
            ro&apos;yxatdan o&apos;tganmisiz
          </span>
        </div>
      )}
    </div>
  );
}
// 907462987
