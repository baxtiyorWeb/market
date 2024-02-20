import { message } from "antd";
import { useState } from "react";
import SpinLoading from "../../ui/loading/spinLoading";

export default function Confirm() {
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function mutate() {
    setIsLoading(true);
    const data = await fetch(
      `http://95.130.227.131:8080/api/v1/authority/code-confirm?code=` +
        confirm,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9,uz;q=0.8",
          cookie: "JSESSIONID=0C4D8096D44B7485CE90320E86F24C98",
          Referer: "http://95.130.227.131:8080/api/v1/swagger-ui/index.html",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "POST",
      },
    );

    if (data.ok === 200) {
      message.success("kod to'g'ri: " + confirm);
    } else {
      if (data.status === 400) {
        message.error("ma'lumot xato: " + confirm);
        setIsLoading(false);
      }
    }
  }

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
            onClick={() => mutate()}
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
