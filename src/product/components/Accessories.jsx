import React from "react";
import { Span } from "../../ui/Span";
import { Div } from "../../ui/div/div";
import Selection from "../../ui/selection/Selection";

export default function Accessories() {
  const location = [
    {
      value: "qumqurg'on",
      label: "qumqurg'on",
    },
    {
      value: "termiz",
      label: "termiz",
    },
  ];
  const tech = [
    {
      value: "ehtiyot qismlar",
      label: "ehtiyot qismlar",
    },
    {
      value: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <Div className={"w-[334px]"}>
          <Span>Hudud</Span>
          <Selection option={location} placeholder={"huduni kiriting"} />
        </Div>
        <Div className={"w-[334px]"}>
          <Span>Texnikani tanlang</Span>
          <Selection option={location} placeholder={"Texnikani tanlang"} />
        </Div>
        <Div className={"w-[334px]"}>
          <Span>Hudud</Span>
          <Selection option={location} />
        </Div>
      </div>
    </div>
  );
}
