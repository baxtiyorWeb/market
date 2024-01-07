import React from "react";
import { FaEye } from "react-icons/fa";
export default function ProductAbout() {
  return (
    <div className="">
      <div class="my-6 flex items-center justify-between">
        <div class="flex items-center gap-x-4">
          <span class="text-xs font-normal text-[#959EA7]">
            Toshkent shahar
          </span>
          <div class="h-1 w-1 rounded-full bg-[#959EA7]"></div>
          <span class="text-xs font-normal text-[#959EA7]">
            Qo’shilgan: 20 Aprel, 2022. 14:30
          </span>
        </div>
        <div class="relative flex items-center gap-x-4">
          <div class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px]">
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
              class="lucide lucide-share2"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </div>
          <button class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px] text-black backdrop-blur-lg">
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
              class="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="mb-6 flex w-full flex-col gap-y-5">
        <h1 class="text-2xl font-normal text-black">
          Iphone 12 pro Max original (holati zo’r)
        </h1>
        <h5 class="text-xl font-semibold text-black">
          370 196 800{" "}
          <span className="text-xs font-normal text-[#959EA7]">
            bo'lib to'lashga{" "}
          </span>
        </h5>
      </div>
      <div className="mt-[27px] h-[1px] w-full bg-[#DFE2E5]"></div>

      <div class="mb-10 mt-8 flex flex-col gap-y-8">
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Holati</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">
            Zapchast uchun
          </span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Xabarnomadan</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">
            Jismoniy shaxs
          </span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Hujjati</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">512 GB</span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Hujati bor</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">512 GB</span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Operatsion tizim</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium uppercase text-black">
            IOS
          </span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Xotira kartasi uyasi</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">Bor</span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">SIM-karta soni</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">
            2 SIM kartali
          </span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">IMEI kodini ro’yxatdan o’tqazish</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">
            Ro’yxatdan o’tgan
          </span>
        </div>
        <div class="flex items-center justify-between gap-x-3">
          <span class="w-full">Batareya xolati %</span>
          <div
            data-orientation="horizontal"
            role="none"
            class="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
          ></div>
          <span class="w-full text-base font-medium text-black">99%</span>
        </div>
      </div>
      <div class="mt-10 flex w-full flex-col gap-y-5">
        <h3 class="text-[20px] font-semibold text-black">Qisqacha ma’lumot</h3>
        <p class="text-foreground font-poppins text-[16px] font-normal leading-[30px]">
          A14 Bionic - 5nm texnologiyasida ishlab chiqarilgan birinchi iPhone
          protsessori. Uning rivojlangan ichki qismlari atomlarning kattaligiga
          teng. Unda 40% ko'proq tranzistor mavjud, shuning uchun protsessor
          tezroq ishlaydi va shu bilan birga batareyaning quvvatini yanada
          tejamkor saqlaydi. Va yangi signal
        </p>
      </div>
      <div className="mb-5 mt-10 h-[1px] w-full bg-[#DFE2E5]"></div>
      <div className="text text-[#959EA7 ] text flex justify-between font-poppins text-[14px] font-normal leading-[100%] text-[#959EA7]">
        <span>E'lon raqami 6239</span>
        <span className="flex items-center justify-center">
          Ko’rganlar: <FaEye className="ml-2 mr-2" /> 412
        </span>
      </div>
    </div>
  );
}
