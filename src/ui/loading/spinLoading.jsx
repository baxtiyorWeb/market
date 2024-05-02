import { Spin } from "antd";
import React from "react";

export default function SpinLoading() {
  return (
    <Spin
      delay={0}
      className="text-textColor"
      style={{
        color: "white !important",
      }}
    />
  );
}
