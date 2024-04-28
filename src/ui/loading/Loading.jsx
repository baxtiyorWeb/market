import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./loading.css";
export default function Loading() {
  return (
    <div className="z-10000 fixed left-0 top-0 z-[999999] flex h-[100vh] w-full items-center justify-center bg-[#ffffff]">
      <Spin spinning indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
    </div>
  );
}
