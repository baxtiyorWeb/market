import React from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <div className="p-2">
      <div className="flex h-24 w-[360px] items-center justify-center rounded-md border border-bgColor p-3">
        <FaPhone className="text mx-3 text-2xl text-textColor" />{" "}
        <span className="text-xl font-medium">(+998) XX-XXX-XX-XX</span>
      </div>
      <div className="my-2 flex h-14 w-[360px] cursor-pointer items-center justify-center rounded-md border border-bgColor bg-bgColor p-3 text-xl text-whiteTextColor hover:bg-whiteTextColor hover:text-textColor">
        Telegram Send Message
      </div>
      <div className="my-2 flex h-14 w-[360px] items-center justify-center rounded-md border border-bgColor bg-bgColor p-3 text-xl text-whiteTextColor">
        Telegram Send Message
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start justify-center">
            <FaUser className="mr-3 h-[50px] w-[50px] rounded-full border p-1 " />
            <Link
              to={"/"}
              className="text text-sm text-blue-500 hover:underline"
            >
              view profile
            </Link>
          </div>
          <span className="text cursor-pointer  text-lg ">
            Baxtiyor Qurbonnazarov
          </span>
        </div>
      </div>
    </div>
  );
};

export default Seller;
