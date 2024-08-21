import React from "react";
import { Link } from "react-router-dom";

const PrefetchComponent = ({ item }) => {
  return (
    <div>
      <Link
        to={`/category/${item?.id}?category-name=${item?.name
          .split(", ")
          .join("-")}`}
        className="group flex   flex-col  items-center justify-center rounded-full   text-center text-sm "
      >
        <img
          src={`data:image/png;base64,${item?.file?.fileBase64}`}
          className="xs:p-1`} my-2 xl:w-[80px_!important] xl:h-[80px_!important] h-[100px] w-[100px] rounded-full  border border-bgColor object-cover p-[10px]   xs:h-[60px_!important] xs:w-[60px_!important]"
          alt=""
        />
        <span className="mt-3 text-center font-poppins font-normal  not-italic  leading-[100%] text-textColor group-hover:text-bgColor xs:text-xs">
          {item?.name}
        </span>
      </Link>
    </div>
  );
};

export default PrefetchComponent;
