import React from "react";
import Exports from "../../../data/export";

const ProductFilter = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex w-full items-center justify-between">
          <span>dan</span>
          <span>gacha</span>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="number"
            className="m-1 w-full rounded-sm border py-2 indent-2 outline-none"
            pattern="-"
          />

          <input
            type="number"
            className="m-1 w-full rounded-sm border py-2 indent-2 outline-none"
          />
        </div>
      </div>

      <div>
        <Exports />
      </div>
    </div>
  );
};

export default ProductFilter;
