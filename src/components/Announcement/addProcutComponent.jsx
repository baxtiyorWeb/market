import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowDown } from "react-icons/fa";
import Select from "react-select";
import * as yup from "yup";
import Container from "../../shared/Container";
export default function AddProductComponent() {
  const [open, setOpen] = useState(null);
  // schema buil
  const schema = yup.object().shape({
    test: yup.string().required("test input is required"),
  });

  //  form submit
  const onSubmit = (data) => {
    console.log(data);
  };

  // schema buil resolver
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const toggleOption = () => {
    setOpen(!open);
  };

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
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                className="mt-2 h-[50px] w-[334px] shrink-0 cursor-pointer rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
                placeholder="Kategoriyani tanlang"
                onClick={toggleOption}
              />
              <FaArrowDown
                className={
                  open
                    ? "absolute right-3 top-6 rotate-180 transform  text-[#505050] transition-all"
                    : "absolute right-3 top-6 rotate-0 transform  text-[#505050] transition-all"
                }
              />
            </div>
            {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
            <Select
              options={options}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "none" : "none",
                  boxShadow: state.isFocused ? "none" : "none",
                  "&:hover": {
                    borderColor: "none",
                  },
                  ":optional": {
                    "&:hover": "none",
                  },
                }),
                option: (styles, state) => ({
                  ...styles,
                  color: "#000",
                  background: state.isFocused
                    ? "none"
                    : state.isSelected
                      ? "none"
                      : undefined,
                  zIndex: 1,
                }),
              }}
            />
          </div>
        </form>
      </div>
    </Container>
  );
}
