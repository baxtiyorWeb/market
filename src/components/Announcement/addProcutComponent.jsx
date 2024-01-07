import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../../shared/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Select from "react-select";
import { FaArrowDown } from "react-icons/fa";
export default function AddProductComponent() {
  const [selectedOption, setSelectedOption] = useState(null);
  // schema buil
  const schema = yup.object().shape({
    test: yup.string().required("test input is required"),
  });

  //  form submit
  const onSubmit = (data) => {
    console.log(data);
  };

  // schema buil resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const value = [
    {
      value: "",
    },
  ];
  return (
    <Container>
      <div className="mb-10 mt-[43px]">
        <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]">
          Kvartira
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-3"
        >
          <div className="mb-10">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              To’liq ism
            </span>
            <input
              type="text"
              className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="Imomova Mohizoda"
            />
          </div>
          <div className="mb-10">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              E-mail
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="imomovamohizoda@gmail.com"
            />
          </div>
          <div className="mb-10">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Telefon nomer
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="+998900158502"
            />
          </div>
          <div className="mb-10 w-[334px]">
            <span></span>
            <div className="flex items-center justify-center relative">
              <input
                type="text"
                className="mt-2 h-[50px] w-[334px] shrink-0 cursor-pointer rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
                placeholder="Kategoriyani tanlang"
              />
              <FaArrowDown className="absolute right-3 top-6 text-[#505050]" />
            </div>
            <div className="">
              <button className="h-[40px] w-full border ">mashina</button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
