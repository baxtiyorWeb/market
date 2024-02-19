import { Spin } from "antd";
import React from "react";

export default function SpinLoading() {
  return (
    <Spin
      delay={0}
      className="text-white"
      style={{
        color: "white !important",
      }}
    />
  );
}
