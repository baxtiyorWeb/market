import { useSearchParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import ProductQuestions from "./ProductQuestions";
import ProductReviews from "./ProductReviews";
import Seller from "./Seller";
import { ArrowDown } from "lucide-react";

const ProductTabs = ({ productDetail }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabIndex = searchParams.get("infoTab");
  const productTabgetIndex = (e) => {
    setSearchParams({ infoTab: e });
  };

  return (
    <div className=" mt-5 w-full bg-whiteTextColor p-3">
      <div className="h-full w-full ">
        <div className="flex items-center justify-start border-b pb-3">
          <span
            className={`mx-1 my-1  flex  cursor-pointer select-none items-center justify-center rounded-md border border-bgColor   px-3 py-2 text-textColor hover:bg-bgColor hover:text-whiteTextColor ${
              tabIndex == 1 ? " bg-bgColor text-whiteTextColor" : ""
            } `}
            onClick={() => productTabgetIndex(1)}
          >
            ma&apos;lumot
          </span>
          <span
            className={`mx-1 my-1  flex  cursor-pointer select-none   items-center justify-center rounded-md border border-bgColor px-3 py-2 text-textColor hover:bg-bgColor hover:text-whiteTextColor ${
              tabIndex == 2 ? " bg-bgColor text-whiteTextColor" : ""
            } `}
            onClick={() => productTabgetIndex(2)}
          >
            Sharxlar
          </span>
          <span
            className={`mx-1 my-1  flex  cursor-pointer select-none   items-center justify-center rounded-md border border-bgColor px-3 py-2 text-textColor hover:bg-bgColor hover:text-whiteTextColor ${
              tabIndex == 3 ? " bg-bgColor text-whiteTextColor" : ""
            } `}
            onClick={() => productTabgetIndex(3)}
          >
            Savollar
          </span>
          <span
            className={`mx-1 my-1  flex  cursor-pointer select-none   items-center justify-center rounded-md border border-bgColor px-3 py-2 text-textColor hover:bg-bgColor hover:text-whiteTextColor ${
              tabIndex == 4 ? " bg-bgColor text-whiteTextColor" : ""
            } `}
            onClick={() => productTabgetIndex(4)}
          >
            sotuvchi
          </span>
        </div>

        <div>
          {tabIndex == 1 ? <ProductInfo productDetail={productDetail} /> : ""}
          {tabIndex == 2 ? <ProductReviews /> : ""}
          {tabIndex == 3 ? <ProductQuestions /> : ""}
          {tabIndex == 4 ? <Seller /> : ""}
        </div>
        <div className="text cursor-pointer text-textColor">
          <h1 className=" flex items-center justify-start">
            foydalanuvchining boshqa elonlari <ArrowDown className="mx-3" />
          </h1>
        </div>
        <div className="my-3 grid  h-[581px] w-auto grid-cols-1 border bg-whiteTextColor">
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
{
  /* <div className="my-6 flex  items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="text-xs font-normal text-[#959EA7]">
            {data?.data?.data?.address}
          </span>
          <div className="h-1 w-1 rounded-full bg-[#959EA7]"></div>
          <span className="text-xs font-normal text-[#959EA7]">
            {/* {productgetWithId.productTimeStamps} s
          </span>
        </div>
        <div className="relative flex items-center gap-x-4">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-share2"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </div>
          <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px] text-black backdrop-blur-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-6 flex w-full flex-col gap-y-5">
        <h1 className="text-2xl font-normal text-black">
          {data?.data?.data?.name}
        </h1>
        <h5 className="text-xl font-semibold text-black">
          <span className="mr-5">{data?.data?.data?.price}</span>
          <span className="text-xs font-normal text-[#959EA7]">
            bo'lib to'lashga
          </span>
        </h5>
        <h4>
          <span className="mr-5">
            {data?.data?.data?.canAgree ? "kelishiladi" : ""}
          </span>
        </h4>
      </div>
      <div className="mt-[27px] h-[1px] w-full bg-[#DFE2E5]"></div>

      <div className="mb-10 mt-8 flex flex-col gap-y-8">
        {data?.data?.data?.propertyValues?.map((item, index) => (
          <div
            className="flex items-center justify-between gap-x-3"
            key={index}
          >
            <span className="w-full text-sm">{item?.propertyDto?.name}</span>
            <div
              data-orientation="horizontal"
              role="none"
              className="h-[1px] w-[430px] shrink-0 border border-dashed border-black/10 bg-transparent"
            ></div>
            <span className="w-full text-sm font-medium text-black">
              {item?.stringValue}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-5">
        <h3 className="text-[20px] font-semibold text-black">
          Qisqacha ma’lumot
        </h3>
        <p className="text-foreground font-poppins text-[16px] font-normal leading-[30px]">
          {data?.data?.data?.description}
        </p>
      </div>
      <div className="mb-5 mt-10 h-[1px] w-full bg-[#DFE2E5]"></div>
      <div className="text text-[#959EA7 ] text flex justify-between font-poppins text-[14px] font-normal leading-[100%] text-[#959EA7]">
        <span>E'lon raqami: {data?.data?.data?.id}</span>
        <span className="flex items-center justify-center">
          Ko’rganlar: <FaEye className="ml-2 mr-2" />{" "}
          {data?.data?.data?.viewCount}
          {/* {productgetWithId?.viewCount} 
        </span>
      </div> */
}
