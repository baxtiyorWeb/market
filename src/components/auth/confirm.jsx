import { useState } from "react";
import SpinLoading from "../../ui/loading/spinLoading";

export default function Confirm() {
  const [confirm, setConfirm] = useState("");
  let data = "";
  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      return axios.post(
        `http://95.130.227.131:8080/api/v1/authority/code-confirm`,
        null,
        {
          params: { code: confirm },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json, text/plain, */*",
          },
          credentials: "same-origin",
          data: data,
        },
      );
    },
  });
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
