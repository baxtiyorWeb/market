import { Checkbox } from "antd";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="flex items-center justify-around p-5">
        <div className=" flex h-[312px] w-[328px] flex-col  place-content-around items-center  rounded-md border">
          <div className="flex  flex-col items-center justify-center ">
            <h1 className="text-[20px] font-medium leading-[20px] tracking-[-2%]">
              Tezkor savdo
            </h1>
            <span className="text-[15px] font-medium leading-[22.5px]">
              8 kun
            </span>
          </div>
          <hr className="w-[90%] " />
          <div className="flex  flex-col items-start justify-center ">
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Vebsayt
            </span>
            <span className="flex items-center justify-center">
              <Checkbox checked={false} className="my-1 mr-5" /> Telegram
            </span>
            <span className="flex items-center justify-center">
              <Checkbox checked={false} className="my-1 mr-5" /> Instagram
            </span>
          </div>
          <hr className="w-[90%] " />
          <div className="flex w-[90%] items-center justify-between ">
            <h1 className="text-[16px] font-bold leading-[20px] tracking-[-3%]">
              5 000 so&apos;m
            </h1>
            <button
              className="px-4ng-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              onClick={() => (window.location = "/product-form/add-product")}
            >
              tanlash
            </button>
          </div>
        </div>
        <div className=" flex h-[312px] w-[328px] flex-col  place-content-around items-center  rounded-md border">
          <div className="flex  flex-col items-center justify-center ">
            <h1 className="text-[20px] font-medium leading-[20px] tracking-[-2%]">
              Tezkor savdo
            </h1>
            <span className="text-[15px] font-medium leading-[22.5px]">
              8 kun
            </span>
          </div>
          <hr className="w-[90%] " />
          <div className="flex  flex-col items-start justify-center ">
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Vebsayt
            </span>
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Telegram
            </span>
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Instagram
            </span>
          </div>
          <hr className="w-[90%] " />
          <div className="flex w-[90%] items-center justify-between ">
            <h1 className="text-[16px] font-bold leading-[20px] tracking-[-3%]">
              5 000 so&apos;m
            </h1>
            <button
              className="px-4ng-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              onClick={() => (window.location = "/product-form/add-product")}
            >
              tanlash
            </button>
          </div>
        </div>
        <div className=" flex h-[312px] w-[328px] flex-col  place-content-around items-center  rounded-md border">
          <div className="flex  flex-col items-center justify-center ">
            <h1 className="text-[20px] font-medium leading-[20px] tracking-[-2%]">
              Tezkor savdo
            </h1>
            <span className="text-[15px] font-medium leading-[22.5px]">
              8 kun
            </span>
          </div>
          <hr className="w-[90%] " />
          <div className="flex  flex-col items-start justify-center ">
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Vebsayt
            </span>
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Telegram
            </span>
            <span className="flex items-center justify-center">
              <Checkbox checked className="my-1 mr-5" /> Instagram
            </span>
          </div>
          <hr className="w-[90%] " />
          <div className="flex w-[90%] items-center justify-between ">
            <h1 className="text-[16px] font-bold leading-[20px] tracking-[-3%]">
              5 000 so&apos;m
            </h1>
            <button
              className="px-4ng-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              onClick={() => (window.location = "/product-form/add-product")}
            >
              tanlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
