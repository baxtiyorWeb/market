import { StarFilled } from "@ant-design/icons";
import { Image } from "antd";
import React from "react";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <div className="flex w-max -skew-x-12 items-center justify-center">
        <Link to={"/category/detail"} className="text text-red-500">
          Asosiy
        </Link>{" "}
        <span className="mx-5">/</span>
        <Link to={"/category/detail"} className="text text-red-500">
          Kompyuter
        </Link>{" "}
        <span className="mx-5">/</span>
        <Link to={"/category/detail"} className="text text-red-500">
          Lenovo
        </Link>{" "}
        {/* <span className="mx-5">/</span> */}
      </div>
      <div>
        <h1 className="text my-10 text-[42px] font-medium leading-[49px] text-textColor">
          Lenovo Idepad 3
        </h1>
        <div className="mb-5 flex w-full  items-center justify-between ">
          <div className=" flex h-max  w-max items-center justify-center">
            <span className="mr-3 cursor-pointer">
              <StarFilled className="text   text-bgColor" />
            </span>
            <span className="mr-3 cursor-pointer">
              <StarFilled className="text   text-bgColor" />
            </span>
            <span className="mr-3 cursor-pointer">
              <StarFilled className="text   text-bgColor" />
            </span>
            <span className="mr-3 cursor-pointer">
              <StarFilled className="text   text-bgColor" />
            </span>
            <span className="mr-3 cursor-pointer">
              <StarFilled className="text   text-bgColor" />
            </span>
            <span>0 ta sharxlar </span>
          </div>
          <div className="flex  w-max items-center justify-center ">
            <div className="mr-8 inline-flex cursor-pointer  items-center justify-center text-xl text-red-500">
              <MdOutlineCompareArrows className="mr-3 " />
              <span className="text-base">taqqoslash</span>
            </div>
            <div className="mr-8 inline-flex cursor-pointer  items-center justify-center text-xl text-red-500">
              <FaRegHeart className="mr-3 " />{" "}
              <span className="text-base">yoqtirganlarga qo&apos;shish</span>
            </div>
            <div className="inline-flex  items-center justify-center text-xl text-red-500">
              <FaShare className="mr-3 " />{" "}
              <span className="text-base">Ulashish</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-start justify-start">
        <div className="  ">
          <div className="h-[468px] w-[468px]">
            <Image
              src="https://olcha.uz/image/700x700/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg"
              alt=""
              className="h-full w-full bg-[#F6F7F9] object-contain"
            />
          </div>
          <div className="relative my-5 flex items-center justify-start">
            <div
              className="absolute top-8 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-whiteTextColor text-2xl leading-[0] text-red-500 shadow-[0_5px_10px_#0000001a]
  transition-all delay-[0s] duration-[0.3s] ease-[ease]"
            >
              <span>{"<"}</span>
            </div>
            <div
              className="absolute right-0 top-8 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-whiteTextColor text-2xl leading-[0] text-red-500 shadow-[0_5px_10px_#0000001a] transition-all
  delay-[0s] duration-[0.3s] ease-[ease]"
            >
              <span>{">"}</span>
            </div>
            <img
              className="mr-5 h-[100px] w-[100px] rounded-md  border-2"
              src="https://olcha.uz/image/700x700/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg"
              alt=""
            />
            <img
              className="mr-5 h-[100px] w-[100px] rounded-md  border-2"
              src="https://olcha.uz/image/700x700/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg"
              alt=""
            />
            <img
              className="mr-5 h-[100px] w-[100px] rounded-md  border-2"
              src="https://olcha.uz/image/700x700/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg"
              alt=""
            />
            <img
              className="mr-5 h-[100px] w-[100px] rounded-md  border-2"
              src="https://olcha.uz/image/700x700/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="ml-10 flex w-full items-start justify-between ">
          <div>
            <h1 className="text mb-5 text-[#818181]">Rangi</h1>
            <div className="mb-5 flex items-center justify-start">
              <img
                className="mr-3 h-[95px] w-[90px] rounded-md border-2 border-textColor p-2"
                src="https://olcha.uz/image/70x70/products/supplier/stores/1/2023-11-27/MvJ7NTTMbUfAGFz5Np1RbCm1vZnhpOGKCHSvt8pjTlHTG27cmd8ZXv2ANRqU.jpg"
                alt=""
              />
              <img
                className="mr-3 h-[95px] w-[90px] rounded-md border-2 border-textColor p-2"
                src="https://olcha.uz/image/70x70/products/supplier/stores/1/2023-11-27/MvJ7NTTMbUfAGFz5Np1RbCm1vZnhpOGKCHSvt8pjTlHTG27cmd8ZXv2ANRqU.jpg"
                alt=""
              />
              <img
                className="mr-3 h-[95px] w-[90px] rounded-md border-2 border-textColor p-2"
                src="https://olcha.uz/image/70x70/products/supplier/stores/1/2023-11-27/MvJ7NTTMbUfAGFz5Np1RbCm1vZnhpOGKCHSvt8pjTlHTG27cmd8ZXv2ANRqU.jpg"
                alt=""
              />
            </div>

            <div className="mt-10">
              <div className="text  mt-3 flex w-[350px] items-center justify-between gap-x-1  text-sm text-[#818181]">
                <span>Vazni</span>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className=" h-[1px] w-[250px] shrink-0 border border-dashed border-black/10 bg-transparent"
                ></div>
                <span className="font-medium ">1{"."}69</span>
              </div>
              <div className="text  mt-3 flex w-[350px] items-center justify-between gap-x-1  text-sm text-[#818181]">
                <span>Rangi</span>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="  h-[1px] w-[250px] shrink-0 border border-dashed border-black/10 bg-transparent"
                ></div>
                <span className="font-medium ">1{"."}69</span>
              </div>
              <div className="text  mt-3 flex w-[350px] items-center justify-between gap-x-1  text-sm text-[#818181]">
                <span>Emerald Green</span>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="  h-[1px] w-[250px] shrink-0 border border-dashed border-black/10 bg-transparent"
                ></div>
                <span className="font-medium ">1{"."}69</span>
              </div>
              <p className=" mb-3 mt-5 cursor-pointer select-none text-sm text-blue-500">
                barchasini xususiyatlarni ko&apos;rish
              </p>
            </div>
          </div>
          <div className="h-[465px] w-[362px] rounded-xl border p-5">
            <div>
              <div className="flex items-center justify-between">
                <div className="text m-0 text-[22px] font-semibold leading-8 text-textColor">
                  2 295 000 so'm
                </div>
                <strike className="text m-0 text-[16px] font-normal leading-8 text-[#999]">
                  2 695 000 so'm
                </strike>
              </div>
              <div className="my-10">
                <span className="text  text-[14px] font-normal leading-8 text-[#999]">
                  Yetkazib berish to'g'risida ma'lumot:
                </span>
                <div className="text m-0 text-[18px] font-semibold leading-8 text-textColor">
                  <span>Standart yetkazib berish</span>
                </div>
                <div>
                  <p className="">
                    Manzilga qarab 4 soatdan 3 kungacha yetkazib beriladi
                  </p>{" "}
                </div>
              </div>
              <button className="text my-5 flex h-[48px] w-[338px] items-center justify-center rounded-xl bg-[#12BF6C] text-white">
                Savatchaga qo'shish
              </button>
              <button className="text flex h-[48px] w-[338px] items-center justify-center rounded-xl border-2 border-textColor bg-whiteTextColor text-textColor">
                Bir klikda sotib olish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[788px]  ">
        <h1 className="text-8 my-5 mb-6 text-4xl leading-10 text-[#111]">
          Tavsifi
        </h1>
        <div className="text text-base font-normal text-[#999] ">
          <p className="leading-6 ">
            Yupqa korpusdagi sig'imli batareya Honor X7b: 6000 mA/soat batareya
            quvvatiga ega eng nozik va engil smartfon Yupqa ramkalar va
            ergonomik dizayn Qo'lingizdagi smartfonni qulay his qilish uchun
            orqa panel 63 daraja egilgan Yon tomonda barmoq izlari skaneri
            Xavfsiz va samarali. Tegish orqali qulfni oching Surround ovoz
            effektiga ega stereo dinamiklar 2 karnay, 2 baravar ko'proq
            taassurot\ Stereo ovoz Eshitish vositasi va multimediya dinamiki
            audio ijro etilganda stereo tovush chiqaradi, bu yuqori ovoz
            balandligi va ovoz sifati bilan ajralib turadi. 200% ovoz
            balandligi* Ssenariyga qarab ovozni optimallashtirish Ilova turini
            avtomatik ravishda aniqlaydi va ovoz effektlarini moslashtiradi
            Dizayn va ekran Ultra yupqa ramkalar bilan 90Hz FHD+ displey Baland
            va atrof-muhit ovozi uchun stereo dinamiklar Yupqa tanadagi jozibali
            dizayn Ultra aniq asosiy kamera Mobil fotografiyada yangi tajriba
            Har bir kadrda ajoyib natijalar 2x kattalashtirish bilan uzoq va
            yaqin go‘zallikni suratga oling Kecha suratga olish HONOR X7b tasvir
            sensori piksellarni birlashtirish texnologiyasidan foydalanadi, bu
            esa Tungi suratga olish rejimida 1,92 mikron oʻlchamdagi bitta katta
            pikselni yaratish uchun 9 pikselgacha avtomatik ravishda 1
            pikselgacha birlashtirish imkonini beradi. Batareya Aqlli energiya
            tejash texnologiyasiga ega sig'imli batareya. DXOMARK sertifikati,
            batareyaning ishlash muddati 3 kungacha Uzoq muddatli batareya 3 yil
            doimiy foydalanishdan keyin ham batareya quvvatini saqlab qoladi
            1000 ta zaryadlash davridan keyin maksimal quvvatning 80% dan
            ortig'i HONOR eslatmalari Ekranda uchta barmoq bilan pastga suring,
            hujjat avtomatik ravishda HONOR Notes-da saqlanadi, bu sizga
            sahifani hatto oflayn rejimda ham ko'rish imkonini beradi.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-8 my-5 mb-6 text-4xl leading-10 text-[#111]">
            Xususiyatlari
          </h1>
          <div className="text  mt-3 flex w-full items-center justify-between gap-x-1  text-base text-[#818181]">
            <span>Vazni</span>
            <div
              data-orientation="horizontal"
              role="none"
              className=" h-[1px] w-[600px] shrink-0 border border-dashed border-black/10 bg-transparent"
            ></div>
            <span className="font-medium ">1{"."}69</span>
          </div>
          <div className="text  mt-3 flex w-full items-center justify-between gap-x-1  text-base text-[#818181]">
            <span>Vazni</span>
            <div
              data-orientation="horizontal"
              role="none"
              className=" h-[1px] w-[600px] shrink-0 border border-dashed border-black/10 bg-transparent"
            ></div>
            <span className="font-medium ">1{"."}69</span>
          </div>
          <div className="text  mt-3 flex w-full items-center justify-between gap-x-1  text-base text-[#818181]">
            <span>Vazni</span>
            <div
              data-orientation="horizontal"
              role="none"
              className=" h-[1px] w-[600px] shrink-0 border border-dashed border-black/10 bg-transparent"
            ></div>
            <span className="font-medium ">1{"."}69</span>
          </div>
          <div className="text  mt-3 flex w-full items-center justify-between gap-x-1  text-base text-[#818181]">
            <span>Vazni</span>
            <div
              data-orientation="horizontal"
              role="none"
              className=" h-[1px] w-[600px] shrink-0 border border-dashed border-black/10 bg-transparent"
            ></div>
            <span className="font-medium ">1{"."}69</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
