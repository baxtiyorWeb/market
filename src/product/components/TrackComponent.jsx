import React, { useEffect, useState } from "react";
import api from "../../config/api/api.jsx";
import useData from "../../hooks/useData.js";
import CheckBox from "../../ui/CheckBox.jsx";
import { FileUpload } from "../../ui/FileUpload.jsx";
import { Span } from "../../ui/Span.jsx";
import SwitchedMode from "../../ui/SwitchedMode.jsx";
import { Div } from "../../ui/div/div.jsx";
import Input from "../../ui/input/Input.jsx";
import { TextArea } from "../../ui/input/TextArea.jsx";
import SpinLoading from "../../ui/loading/spinLoading.jsx";
const TrackComponent = () => {
  const [fileList, setFileList] = useState("");
  const { getCategoryData } = useData();
  const [state, setState] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategoryData();
  }, []);

  const addCategory = async () => {
    try {
      setLoading(true);
      const data = await api.post(
        "/product",
        JSON.stringify({
          id: 10,
          name: "state.name",
          price: 10,
          canAgree: true,
          description: "asdasasd",
          categoryId: 1,
          districtId: 1,
          address: "dasdaweadasda",
          propertyValueForms: [
            {
              propertyId: 0,
              intValue: 0,
              stringValue: "dasdasasd",
              booleanValue: true,
              doubleValue: 0,
              dateValue: "2024-02-20T08:28:32.755Z",
            },
          ],
          productImageForms: [
            {
              image: "dsadasdasdasd.jpg",
              mainImage: true,
            },
          ],
        }),
        {
          headers: {
            "Content-Type": "application/json",

            Accept: "application/json, text/plain, */*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      console.log(data);
    } catch (e) {
      console.log(e);
      console.log(state);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            markasi
          </span>
          <input
            type="text"
            className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
            placeholder="markasini kiriting "
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            modeli
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
      <Div className={"mb-10"}>
        <Span />
        <TextArea className={"resize-none"} />
      </Div>

      <Div className={"mb-10 w-full"}>
        <Span>E&apos;lon nomi</Span>
        <Input className={"w-full"} placeholder={"E'lon nomi "} />
      </Div>
      <Div className={"mb-10 flex items-center justify-start"}>
        <Input className={""} placeholder={"narxni kiriting "} />
        <CheckBox />
      </Div>
      <Div>
        <SwitchedMode />
      </Div>
      <div className="flex items-center justify-between">
        <Div className={"w-full"}>
          <FileUpload fileList={fileList} setFileList={setFileList} />
          <p className="text-right">
            {fileList.length === 0 ? (
              "4 tagacha rasm tanlang"
            ) : (
              <>
                siz
                <span className="ml-1 mr-1 font-bold text-[#1d828e]">
                  {fileList.length}
                </span>
                ta rasm yukladingiz
              </>
            )}
          </p>
        </Div>
      </div>

      <div className="flex items-center justify-start">
        <Div className={"mb-10 mt-[104px]"}>
          <button
            className="border-input hover:bg-accent hover:text-accent-foreground mr-10 inline-flex h-11 items-center justify-center rounded-md border bg-white px-8 text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none"
            type="button"
          >
            Bekor qilish
          </button>
          <button
            className="ring-offset-background inline-flex  h-[45px] w-[175px] items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            onClick={addCategory}
          >
            {loading ? <SpinLoading /> : "E’lonni yuklash"}
          </button>
        </Div>
      </div>
    </div>
  );
};

export default TrackComponent;
