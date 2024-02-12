import { Switch } from "antd";
import React, { useState } from "react";

export default function SwitchedMode() {
  const [value, setValue] = useState(false);
  return (
    <div className="flex items-center justify-start">
      <div className="mb-10 w-auto">
        <Switch checked={value} onChange={() => setValue(!value)} />
        <span className="ml-3">{value ? "kelishiladi" : "kelishilmaydi"}</span>
      </div>
    </div>
  );
}
