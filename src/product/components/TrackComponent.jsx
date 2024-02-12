import React, { useState } from "react";
import CheckBox from "../../ui/CheckBox.jsx";
import { FileUpload } from "../../ui/FileUpload.jsx";
import { Span } from "../../ui/Span.jsx";
import SwitchedMode from "../../ui/SwitchedMode.jsx";
import Action from "../../ui/actions/Action.jsx";
import { Div } from "../../ui/div/div.jsx";
import Input from "../../ui/input/Input.jsx";
import { TextArea } from "../../ui/input/TextArea.jsx";

const TrackComponent = () => {
  const [fileList, setFileList] = useState("");
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
            onChange={(e) => handleInputChange(input.id, e.target.value)}
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
            onChange={(e) => handleInputChange(input.id, e.target.value)}
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
        <Span>E'lon nomi</Span>
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
          <Action />
        </Div>
      </div>
    </div>
  );
};

export default TrackComponent;
