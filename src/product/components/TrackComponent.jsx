import React, { useState } from "react";
import usePropsFormValue from "../../hooks/usePropsFormValue";

const TrackComponent = ({ onAddCategory }) => {
  const { onChange, reset, value } = usePropsFormValue();
  const [categoryInputs, setCategoryInputs] = useState([{ id: 1, value: "" }]);

  const handleAddInput = () => {
    setCategoryInputs([
      ...categoryInputs,
      { id: categoryInputs.length + 1, value: "" },
    ]);
  };

  const handleRemoveInput = (id) => {
    setCategoryInputs(categoryInputs.filter((input) => input.id !== id));
  };

  const handleInputChange = (id, value) => {
    setCategoryInputs(
      categoryInputs.map((input) =>
        input.id === id ? { ...input, value } : input,
      ),
    );
  };

  const handleAddCategory = () => {
    const categoryValues = categoryInputs.map((input) => input.value);
    onAddCategory(categoryValues);
    // Optional: Reset the inputs
    setCategoryInputs([{ id: 1, value: "" }]);
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
      {value}
      <button onClick={() => handleAddCategory()}>send</button>
    </div>
  );
};

export default TrackComponent;
