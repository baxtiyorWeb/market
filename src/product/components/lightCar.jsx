import { Checkbox, Select, Switch } from "antd";
import { useEffect, useState } from "react";
import { FileUpload } from "../../ui/FileUpload";

export default function LightCar() {
  const [value, setValue] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            avtomobil markasi
          </span>
          <input
            type="text"
            className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
            placeholder="masalan nexia... "
          />
        </div>
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            avtomobil modeli
          </span>
          <input
            type="text"
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
            placeholder="masalan 1 yoki 2"
          />
        </div>
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            ishlab chiqarilgan sana
          </span>
          <input
            type="text"
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
            placeholder="shu sana ishlab chiqarilgan"
          />
        </div>
      </div>

      <div className="item-center flex justify-between">
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            qancha masofa bosgan
          </span>
          <input
            type="number"
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
            placeholder="masalan 2000 km"
          />
        </div>
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            Kuzov
          </span>
          <Select
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px]  bg-[#FAFAFA]  font-poppins text-[16px] outline-none"
            placeholder="masalan metal"
            options={[
              {
                value: "Mexanik",
                label: "Mexanik",
              },
              {
                value: "Avtomat",
                label: "Avtomat",
              },
            ]}
          />
        </div>
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            KPP
          </span>
          <Select
            type="number"
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border-[#E2E2E2]  bg-[#FAFAFA]   font-poppins text-[16px] outline-none"
            placeholder="masalan metal"
            options={[
              {
                value: "mexanik",
                label: "mexanik",
              },
              {
                value: "Avtomat",
                label: "Avtomat",
              },
            ]}
          />
        </div>
      </div>

      <div className="item-center flex justify-between">
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            Dvigatel
          </span>
          <Select
            type="number"
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border-[#E2E2E2]  bg-[#FAFAFA]   font-poppins text-[16px] outline-none"
            placeholder="masalan benzin"
            options={[
              {
                value: "benzin",
                label: "benzin",
              },
              {
                value: "dizel",
                label: "dizel",
              },
              {
                value: "elektr",
                label: "elektr",
              },
            ]}
          />
        </div>
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            rangi
          </span>
          <input
            type="text"
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
            placeholder="masalan ko'k"
          />
        </div>
        <div className="mb-10 w-[334px]"></div>
      </div>

      <div className="mb-10 w-full">
        <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
          E'lon nomi
        </span>
        <input
          type="text"
          className="mt-2 h-[50px] w-full shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
          placeholder="e'lon nomini kiriting"
        />
      </div>
      <div className="mb-10 w-full">
        <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
          Tavsif{"(Tavsigfa to’liqroq ma’lumot yozing)"}
        </span>
        <textarea
          minLength={100}
          maxLength={1000}
          className="mt-2 h-[218px] w-full shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
          placeholder="e'lon nomini kiriting"
        />
      </div>
      <div className="flex w-auto items-center justify-start ">
        <div className="mb-10 w-auto">
          <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
            narx kiriting
          </span>
          <input
            className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
            placeholder="maxsulot narxini kiriting"
          />
        </div>

        <div className=" flex h-full w-auto items-center justify-center">
          <span className="ml-5 mr-5">
            <label htmlFor="uzs" className="ml-1 mr-2">
              UZS
            </label>{" "}
            <Checkbox id="uzs" autoFocus />
          </span>
          <span className="ml-5 mr-5">
            <label htmlFor="usd" className="ml-1 mr-2">
              USD
            </label>
            <Checkbox id="usd" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-start">
        <div className="mb-10 w-auto">
          <Switch checked={value} onChange={() => setValue(!value)} />
          <span className="ml-3">
            {value ? "kelishiladi" : "kelishilmaydi"}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-start ">
        <div className="mb-10 w-full">
          <FileUpload />
        </div>
      </div>

      <div className="mb-10 flex w-full items-center justify-start">
        <button
          class="border-input hover:bg-accent hover:text-accent-foreground mr-10 inline-flex h-11 items-center justify-center rounded-md border bg-white px-8 text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none"
          type="button"
        >
          Bekor qilish
        </button>
        <button
          class="ring-offset-background inline-flex h-11 items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          type="submit"
        >
          E’lonni yuklash
        </button>
      </div>
    </div>
  );
}
