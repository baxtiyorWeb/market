import React from "react";
import Location from "./../../../assets/location.svg";
export default function UserBalance() {
  return (
    <>
      <div className="user-title flex items-center justify-between">
        <div className="mr-6 flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full border p-1 hover:bg-slate-500/10">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-user-1374-433878.png"
            alt=""
            className="h-full  w-full  rounded-full "
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="mb-2 text-xl font-semibold capitalize text-[#130F1E]">
              Baxtiyor Qurbonnazarov
            </h1>
          </div>
          <div className="flex  items-center">
            <img src={Location} alt="" className="mr-1 h-5 w-5 " />
            <span className="flex cursor-pointer items-center gap-x-2 text-[14px] capitalize text-gray-500 underline">
              Qumqorgon
            </span>
          </div>
        </div>
        <div className="flex w-[540px]  items-start justify-between ">
          <div>
            <h1 className="mb-2 text-[18px] font-semibold capitalize text-[#130F1E]">
              5 555 500 sum
            </h1>
            <span className="flex items-center gap-x-2 text-[14px] capitalize italic text-gray-500">
              hisobingiz
            </span>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex h-10 w-[180px] items-center justify-center rounded-lg bg-[#1D828E] text-[#fff] hover:bg-[#1D828E]/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
              </svg>
              <span>Balansni to'ldirish</span>
            </button>
            <button className="ml-3 mr-3 flex h-10 w-[180px] items-center justify-center  rounded-md border bg-[#fff] text-sm font-medium text-[#000] hover:bg-[#fff]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span>Balansni to'ldirish</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
