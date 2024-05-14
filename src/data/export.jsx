import { Checkbox, Collapse, Input } from "antd";
import React from "react";
import "./style.css";
const Exports = () => {
  const items = [
    {
      key: "1",
      label: "Kompaniya",
      children: (
        <>
          <Input placeholder="qidirish" className="mb-5 mt-1 h-10 border" />
          <div className="flex w-full items-center justify-start ">
            <Checkbox className="mr-3 " id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Artel
            </label>
          </div>
          <div className="flex w-full items-center justify-start ">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Apple
            </label>
          </div>
          <div className="flex w-full items-center justify-start ">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Asus
            </label>
          </div>
          <div className="flex w-full items-center justify-start ">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Artel
            </label>
          </div>
          <div className="flex w-full items-center justify-start ">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Microsoft
            </label>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "Brend ",
      children: (
        <p>
          {" "}
          <>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Artel
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Macbook air
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Macbook pro
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Asus rog strix
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                hp pavilion gaming
              </label>
            </div>
          </>
        </p>
      ),
    },
    {
      key: "3",
      label: "Narx",
      children: (
        <p>
          <>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                400 0000
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                500 00000 00
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Asus
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Artel
              </label>
            </div>
            <div className="flex w-full items-center justify-start ">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-base"
              >
                Artel
              </label>
            </div>
          </>
        </p>
      ),
    },
    {
      key: "4",
      label: "Sotuv turi",
      children: (
        <>
          <div className="flex w-full items-center justify-start ">
            <Checkbox
              className="mr-3 w-[30px] rounded-none"
              id="filter1"
              name="filter1"
            />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Narx
            </label>
          </div>
          <div className="flex w-full items-center justify-start ">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-base"
            >
              Plastik
            </label>
          </div>
        </>
      ),
    },
    {
      key: "5",
      label: "to'lov turi",
      children: <p>ok</p>,
    },
  ];
  return (
    <div className="flex items-center justify-start">
      <Collapse
        expandIconPosition="end"
        className="w-full"
        accordion
        ghost
        collapsible="header"
        defaultActiveKey={1}
        items={items}
      />
    </div>
  );
};

export default Exports;
