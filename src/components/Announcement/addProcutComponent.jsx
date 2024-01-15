import { yupResolver } from "@hookform/resolvers/yup";
import { Select, Switch } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Container from "../../shared/Container";
import ImgUpload from "../image-upload/ImgUpload";
// eslint-disable-next-line react/prop-types
export default function AddProductComponent({ scroll }) {
  const [classActive, setClassActive] = useState(false);
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
  return (
    <Container>
      <div
        className={`${
          scroll ? "mb-10 mt-[0px]" : "mb-10 mt-[181px]"
        } mt-[50px]`}
      >
        <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]">
          Kvartira
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-3"
        >
          <div className="flex items-center justify-between">
            <div className="mb-10">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                To’liq ism
              </span>
              <input
                type="text"
                className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
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
          </div>
          <div className="flex items-center justify-between">
            <div className="mb-10">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                Kategoriyani tanlang
              </span>
              {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
              <Select
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "8px",
                  borderRadius: "10px",
                }}
                defaultActiveFirstOption
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                ]}
              />
            </div>
            <div className="mb-10 w-[334px]">
              {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                Hudud
              </span>
              <Select
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "8px",
                  borderRadius: "10px",
                }}
                defaultActiveFirstOption
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                ]}
              />
            </div>
            <div className="mb-10 w-[334px]">
              {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                Xonadonlar soni
              </span>
              <Select
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "8px",
                  borderRadius: "10px",
                }}
                defaultActiveFirstOption
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="mb-10">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                Tavsif(Tavsigfa to’liqroq ma’lumot yozing)
              </span>
              <textarea
                className="text mt-2 h-[240px] w-[1062px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                placeholder="Tovar haqida ma’lumot yozing"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="mb-10 w-[334px]">
              {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                To`loav turi
              </span>
              <Select
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "8px",
                  borderRadius: "10px",
                }}
                defaultActiveFirstOption
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "pullik",
                    label: "pullik",
                  },
                  {
                    value: "plastik",
                    label: "plastik",
                  },
                ]}
              />
            </div>

            <div className="mb-10">
              <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
                Valyuta
              </span>
              <div className="mt-2 flex w-[334px] items-center justify-between rounded-md border border-[#E2E2E2] p-[3px] ">
                <button
                  onClick={() => setClassActive(!classActive)}
                  className={
                    !classActive
                      ? "h-[42px] w-[161px] flex-shrink-0 rounded-[10px] bg-[#1D828E] text-white"
                      : "h-[42px] w-[161px] flex-shrink-0 rounded-[10px] bg-[#FAFAFA] text-gray-500"
                  }
                >
                  USD
                </button>
                <button
                  onClick={() => setClassActive(!classActive)}
                  className={
                    !classActive
                      ? "h-[42px] w-[161px] flex-shrink-0 rounded-[10px] bg-[#FAFAFA] text-gray-500"
                      : "h-[42px] w-[161px] flex-shrink-0 rounded-[10px] bg-[#1D828E] text-white"
                  }
                >
                  UZS
                </button>
              </div>
            </div>
            <div className="mb-10">
              <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
                Narxi
              </span>
              <input
                type="text"
                className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                placeholder="Qiymatini kiriting"
              />
            </div>
          </div>

          <div className="justfiy-between flex items-center">
            <div className="mb-10 flex justify-between">
              <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
                Kelishish mumkin
              </span>
              <Switch className="ml-10" />
            </div>
          </div>
          <div className="justfiy-between flex items-center">
            <div className="mb-10 w-full">
              <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
                rasm joylash
              </span>
              <div>
                <ImgUpload />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
