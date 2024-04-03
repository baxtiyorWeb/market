import { useState } from "react";

import axios from "axios";
import SpinLoading from "../../ui/loading/spinLoading";

export default function Confirm() {
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const confimCodeSMS = async () => {
    setIsLoading(true);
    let data = JSON.stringify({
      code: confirm,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://95.130.227.131:8080/api/v1/authority/code-confirm",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMmM1MWZjYy00ZDM3LTQwMDEtYjAxMy1jNDczZjgyMTdiNzEiLCJleHAiOjE3MTIxNTI1Mjl9.I8qZu9pboj20ex2C8Q04BPxNxxU8uBi9FvfBdqEKB8E",
        Cookie: "JSESSIONID=288E57C0AE789328333E3E16C6868BDB",
      },
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
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
