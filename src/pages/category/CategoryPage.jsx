import React from "react";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="">
      <div>
        <div className="text my-10 text-[42px] font-medium leading-[49px] text-[#111]  ">
          <h1>Televizor, foto-video va audio</h1>
        </div>
        <div className="flex w-full items-start justify-between   ">
          <div>
            <div className="mb-6">
              <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                Televizorlar
              </Link>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  Audio
                </Link>
              </div>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Musiqa sistemalari
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Akustika
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                mikrofonlar
              </Link>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  Videotexnika
                </Link>
              </div>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Uy kinoteatri
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                DVD-pleer
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Xavfsizlik kameralari
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Video uskunalar uchun aksessuarlar
              </Link>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  Media Player
                </Link>
              </div>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  Diktofonlar
                </Link>
              </div>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6 flex flex-col items-start justify-center">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  Foto, Video
                </Link>
              </div>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Foto va videokameralar uchun aksessuarlar
              </Link>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6 flex flex-col items-start justify-center">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  O&apos;yin konsollari
                </Link>
              </div>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                PlayStation
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Geympadlar
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                Virtual ko‘zoynaklar
              </Link>
              <Link className="text-[15px] font-normal leading-6 text-[#999] hover:text-red-500">
                PlayStation uchun o‘yinlar
              </Link>
            </div>
            <div className="mb-6 flex flex-col items-start justify-center">
              <div className="mb-6 flex flex-col items-start justify-center">
                <Link className="text-[18px] font-bold leading-6 text-[#111] hover:text-red-500">
                  Kronshteynlar
                </Link>
              </div>
            </div>
          </div>
          <div className="h-max w-[75%]  p-1">
            <div className="hover/group mb-10 h-[303px]  overflow-hidden rounded-2xl">
              <img
                src="https://olcha.uz/image/original/category_slider/cdn_1/2024-03-27/F7UUfUVpSctF84Fb9fX5VvwFfwwatRr1pElpTZEQ1BlPWaeu3vDU1KoeFvqa.png"
                className="duration-110 h-full  w-full  transition-all hover/group:scale-105"
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4 ">
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/qdVTBaQHAIBKWX7Zmtnqyt41UiGfCsBuQI7b2T33svLTTu40fF83RVO6u4Q4.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    Televizorlar
                  </h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/MFGlVLSgqFhWAAD20AG8rhl6bqpdxnPH4E4iRcu86AAI3BCelhntarOz1OP3.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">Audio</h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/yw3vCbU0YmfBnMTOjLKSddHwCPWCfgqyQStWCEfPyi4G2jx5Uf61tYpvMXvC.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    Video texnika
                  </h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/VHfLdXIi8WVvhYGxrhdQUVpA2N11hgJEcA4C8uf4sSk4EejpDg1Qhx2lslTF.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    Media Player
                  </h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/tChE7EcMi1DV853t4a54pGU2pZEiw42ELhvqz7lkOuq2E1O93Bwz2XNeslbc.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    Diktofonlar
                  </h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/v36bvXhA1ohp1Ln4w5ZzTA5sd1XZfifKjjFQ6b3q007hWS3TlyWEZYg0PzdZ.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    Foto Video
                  </h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/xQgtxsKDXISSlQ7jXuqLwYdSxKlJx5T8Q2atJyMBS7DJHwQ9xBVGBynxbwrm."
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    O&apos;yin Konsollari
                  </h1>
                </div>
              </div>
              <div className="mb-10 h-max w-[201px]">
                <div className="h-[201px] w-[201px] overflow-hidden rounded-2xl  bg-red-500 ">
                  <img
                    src="https://olcha.uz/image/150x150/category/XlECBHaLlFkVoeUhCOeyEj7ajluhi08Ry80o97ynQHiiTFKHzH0qAdYaNntN.png"
                    className="h-full w-full transition-all duration-100 hover:scale-110"
                    alt=""
                  />
                </div>
                <div className="my-3">
                  <h1 className="text text-light text-center text-xl">
                    Kronshteynlar
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
