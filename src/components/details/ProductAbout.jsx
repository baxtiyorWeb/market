/* eslint-disable react/no-unescaped-entities */
import { FaEye } from "react-icons/fa";
import useMainProducts from "../../hooks/products/useMainProducts";
export default function ProductAbout({ data }) {
  const { productgetWithId } = useMainProducts();
  return (
    <div className="">
      <div className="my-6 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="text-xs font-normal text-[#959EA7]">
            {productgetWithId.districtDto?.name} |{" "}
            {productgetWithId.districtDto?.regionDto?.name}
          </span>
          <div className="h-1 w-1 rounded-full bg-[#959EA7]"></div>
          <span className="text-xs font-normal text-[#959EA7]">
            {productgetWithId.productTimeStamps}
          </span>
        </div>
        <div className="relative flex items-center gap-x-4">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-share2"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </div>
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px] text-black backdrop-blur-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-6 flex w-full flex-col gap-y-5">
        <h1 className="text-2xl font-normal text-black">
          {productgetWithId.name}
        </h1>
        <h5 className="text-xl font-semibold text-black">
          {productgetWithId.price}
          <span className="text-xs font-normal text-[#959EA7]">
            bo'lib to'lashga
          </span>
        </h5>
      </div>
      <div className="mt-[27px] h-[1px] w-full bg-[#DFE2E5]"></div>

      <div className="mb-10 mt-8 flex flex-col gap-y-8">
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Holati</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">
            Zapchast uchun
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Xabarnomadan</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">
            Jismoniy shaxs
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Hujjati</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">
            512 GB
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Hujati bor</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">
            512 GB
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Operatsion tizim</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium uppercase text-black">
            IOS
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Xotira kartasi uyasi</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">Bor</span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">SIM-karta soni</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">
            2 SIM kartali
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">IMEI kodini ro’yxatdan o’tqazish</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">
            Ro’yxatdan o’tgan
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-3">
          <span className="w-full">Batareya xolati %</span>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span className="w-full text-base font-medium text-black">99%</span>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-5">
        <h3 className="text-[20px] font-semibold text-black">
          Qisqacha ma’lumot
        </h3>
        <p className="text-foreground font-poppins text-[16px] font-normal leading-[30px]">
          {productgetWithId.description}
        </p>
      </div>
      <div className="mb-5 mt-10 h-[1px] w-full bg-[#DFE2E5]"></div>
      <div className="text text-[#959EA7 ] text flex justify-between font-poppins text-[14px] font-normal leading-[100%] text-[#959EA7]">
        <span>E'lon raqami </span>
        <span className="flex items-center justify-center">
          Ko’rganlar: <FaEye className="ml-2 mr-2" />{" "}
          {productgetWithId.viewCount}
        </span>
      </div>
    </div>
  );
}
