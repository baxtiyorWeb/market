import { Checkbox } from "antd";
import React from "react";

export default function CheckBox({ value }) {
  return (
    <div className=" flex h-full w-auto items-center justify-center">
      <span className="ml-5 mr-5">
        <label htmlFor="uzs" className="ml-1 mr-2">
          UZS
        </label>{" "}
        <Checkbox id="uzs" autoFocus value={value} />
      </span>
      <span className="ml-5 mr-5">
        <label htmlFor="usd" className="ml-1 mr-2">
          USD
        </label>
        <Checkbox id="usd" value={value} />
      </span>
    </div>
  );
}
