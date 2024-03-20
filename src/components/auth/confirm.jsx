import { useState } from "react";
import SpinLoading from "../../ui/loading/spinLoading";

export default function Confirm() {
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const confimCodeSMS = async () => {
    setIsLoading(true);
    const data = await fetch(
      `http://kelishamiz.uz/api/v1/authority/code-confirm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          code: confirm,
        }),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setIsLoading(false);
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
