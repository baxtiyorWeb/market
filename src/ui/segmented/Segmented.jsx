import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import React from "react";

const SegmentedUi = () => {
  return (
    <Segmented
      options={[
        {
          value: "List",
          icon: <BarsOutlined />,
        },
        {
          value: "Kanban",
          icon: <AppstoreOutlined />,
        },
      ]}
    />
  );
};

export default SegmentedUi;
