import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { catalog } from "../data/data";
import useToggle from "../hooks/useToggle";
import Container from "../shared/Container";
import Overlay from "../ui/Overlay";
export default function AddProductCategory() {
  const { hideLocationMenu, open, showLocationMenu } = useToggle();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const addParams = (value) => {
    setParams({ q: value });
    setQuery(value);
  };

  return (
    <div className="product-layout">
      <Container>
        <h1 className="mt-10 text-center  text-[30px] text-[#1d828e]">
          {query}
        </h1>

        <div
          className={`${
            scroll ? "mb-10 mt-[0px]" : "mb-10 mt-[181px]"
          } mt-[50px]`}
        >
          <div>
            <button
              onClick={showLocationMenu}
              className="ring-offset-background mb-16 inline-flex h-10 select-none items-center justify-center rounded-md border border-[#1D828E] bg-white px-4 py-2 text-sm font-medium text-[#1D828E] transition-colors duration-200 ease-in-out hover:bg-[#1D828E] hover:text-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Kategoriyani tanlang
            </button>
          </div>
          <h1 className="text inline  font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]"></h1>
        </div>
        {open ? <Overlay closed={hideLocationMenu} /> : open}
        {open ? (
          <div className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%]  z-[302] grid w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#FFFFFF] p-6 py-10 shadow-lg duration-200 sm:rounded-lg md:w-full">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {catalog.map((item, index) => {
                return (
                  <div className="h-fit" key={index}>
                    <h1 className="mb-5 text-xl font-medium text-[#1D828E] ">
                      {item.title}
                    </h1>
                    <ul className="flex flex-col gap-y-3">
                      {item.children.map((item, index) => (
                        <li key={index} className="w-fit text-sm ">
                          <span
                            onClick={() =>
                              addParams(item.value) != hideLocationMenu()
                            }
                            className="cursor-pointer hover:underline"
                          >
                            {item.title}
                          </span>
                          {item.status ? (
                            <span className="ml-3 mr-1 cursor-auto text-teal-500">
                              - tugatilgan
                            </span>
                          ) : (
                            <span className="ml-3 mr-1 cursor-auto text-red-500">
                              - bajarilmoqda ... 
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          open
        )}
        <div className="flex items-center justify-between">
          <div className="mb-10 w-[334px]">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              To’liq ism
            </span>
            <input
              type="text"
              className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
              placeholder="Imomova Mohizoda"
            />
          </div>
          <div className="mb-10 w-[334px]">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              E-mail
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="imomovamohizoda@gmail.com"
            />
          </div>
          <div className="mb-10 w-[334px]">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Telefon nomer
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="+998900158502"
            />
          </div>
        </div>

        <div className="child-product">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
