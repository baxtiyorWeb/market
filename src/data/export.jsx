import { Checkbox, Collapse } from "antd";
import React from "react";
import "./style.css";
const Exports = () => {
  const items = [
    {
      key: "1",
      label: "Kompaniya",
      children: (
        <>
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
            >
              Artel
            </label>
          </div>
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
            >
              Apple
            </label>
          </div>
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
            >
              Asus
            </label>
          </div>
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
            >
              Artel
            </label>
          </div>
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
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
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                Artel
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                Macbook air
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                Macbook pro
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                Asus rog strix
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
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
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                400 0000
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                500 00000 00
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                Asus
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
              >
                Artel
              </label>
            </div>
            <div className="w-full">
              <Checkbox className="mr-3" id="filter1" name="filter1" />
              <label
                htmlFor="filter1"
                className="text cursor-pointer text-pretty text-sm"
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
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
            >
              Narx
            </label>
          </div>
          <div className="w-full">
            <Checkbox className="mr-3" id="filter1" name="filter1" />
            <label
              htmlFor="filter1"
              className="text cursor-pointer text-pretty text-sm"
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
      <Collapse className="w-full" accordion items={items} />
    </div>
  );
};

export default Exports;
