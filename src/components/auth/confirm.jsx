import { useState } from "react";

import SpinLoading from "../../ui/loading/spinLoading";
export default function Confirm() {
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const confimCodeSMS = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "http://95.130.227.131:8080/api/v1/authority/code-confirm",
        {
          headers: {
            accept: "*/*",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "content-type": "application/json",
            headers: {
              Cookie: "JSESSIONID",
            },
            "Access-Control-Allow-Origin": "*",
          },
          referrer: "http://95.130.227.131:8080/api/v1/",
          referrerPolicy: "strict-origin-when-cross-origin",

          body: JSON.stringify({
            code: confirm,
          }),
          method: "POST",
        },
      );

      const Headers = res.headers.getSetCookie("JSESSIONID");
      console.log(Headers);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex h-[600px] flex-col items-center justify-center rounded-md">
        <div className="flex w-full flex-col items-center justify-center">
          <span className="mb-3 block">4 talik sms xabarni kiriting</span>

          <input
            type="text"
            value={confirm}
            maxLength={4}
            className="h-[50px] w-[80%] rounded-md p-3 outline-none"
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
    </div>
  );
}
// 907462987
