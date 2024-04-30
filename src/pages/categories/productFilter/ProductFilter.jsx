import { Slider } from "antd";
import React, { useState } from "react";
import Exports from "../../../data/export";

const ProductFilter = () => {
  const [rangePriceValue, setRangePriceValue] = useState(0);
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
            defaultValue={rangePriceValue[0]}
          />

          <input
            type="number"
            className="m-1 w-full rounded-sm border py-2 indent-2 outline-none"
            defaultValue={rangePriceValue[1]}
          />
        </div>
      </div>
      <Slider
        range
        defaultValue={[20, 50]}
        disabled={false}
        onChange={(e) => setRangePriceValue(e)}
      />

      <div>
        <Exports />
      </div>
    </div>
  );
};

export default ProductFilter;
