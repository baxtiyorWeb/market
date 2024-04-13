import { useState } from "react";
import CreateLoginAndPassword from "./createLoginAndPassword";
import CreateOtp from "./createOtp";
export default function Confirm() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? <CreateLoginAndPassword /> : <CreateOtp setOpen={setOpen} />}
    </div>
  );
}
// 907462987
