import { Image, message } from "antd";
import { CiHeart } from "react-icons/ci";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import api from "../../config/api/api";
import useProducts from "../../hooks/useProducts";
import Loading from "../../ui/loading/Loading";
import "./Product.css";

const Products = () => {
  const { data, error, isLoading, setPage, page, size } = useProducts();

  const numbers = Array.from(
    { length: data?.data?.data?.totalElements / size },
    (_, index) => index + 1,
  );
  const addLikeFavoriteProduct = async (id) => {
    const data = await api.post(`/favorite-product/add?productId=${id}`);
    if (data.status === 200) {
      message.success("sevimlilarga qo'shildi");
    }
  };

  const setQueryParams = (id) => {
    addLikeFavoriteProduct(id);
  };

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;
  console.log(data?.data?.data?.content);
  return (
    <div className="mt-[40px] h-full w-full">
      <div>
        <h1 className=" mb-10 font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] ">
          <div className="flex items-center justify-between ">
            <h1 className="my-5 text-2xl">top maxsulotlar</h1>
          </div>
        </h1>
      </div>
      <div className="response_product_category grid grid-cols-4 gap-[29px]   md:grid md:grid-cols-4  ">
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.data?.content?.map((item, index) => (
            <Link
              to={`/details/${item.id}?infoTab=1`}
              key={index}
              className="w-[280px]"
            >
              <div className="relative h-[450px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl bg-white drop-shadow  transition-all  ">
                <div className="relative h-[194px]  overflow-hidden">
                  <div className="cart-slider flex h-full  items-center justify-center">
                    <div className="h-[194px] w-[280px] ">
                      <Image
                        alt={"avatar"}
                        src={`data:image/png;base64,${item.file?.fileBase64}`}
                        title={`${item?.name}`}
                        loading="eager"
                        className="h-[194px] w-[280px] object-contain "
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-[18px]">
                  <span className="text line-clamp-1 font-poppins text-[18px] font-medium not-italic leading-[120%] tracking-[-0.32px] text-textColor">
                    {item?.name}
                  </span>
                  <div className="mt-[12px] flex items-center  justify-start">
                    <span className="text inline-flex items-center font-poppins text-[16px] font-semibold not-italic leading-[100%] text-teal-500">
                      {item?.price}
                      <p className="ml-1">so{"'"}m</p>
                    </span>{" "}
                  </div>
                  <div className="mt-3 rounded-xl bg-slate-500/15 p-2">
                    <div className="text-xs">
                      <span>to&apos;lov turi</span> -{" "}
                      <span>{item?.sellTypeName}</span>
                    </div>
                    <div className="text-xs">
                      <span>sotuv turi</span> -{" "}
                      <span>{item?.paymentTypeName}</span>
                      <div className="text mt-3 flex items-center justify-start font-poppins text-[14px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                        <div className="flex w-full items-center justify-start ">
                          <span className="flex items-center justify-start ">
                            <IoLocationOutline />
                            {item?.regionName}, {item?.districtName}
                          </span>
                        </div>
                      </div>
                      <div className="text mt-[20px] flex items-center justify-between font-poppins  font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                        <span
                          onClick={() => setQueryParams(item?.id)}
                          className="absolute right-2 top-2 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border bg-[#aeaead4b] text-white hover:bg-[#AEAEAD]"
                        >
                          <CiHeart className="cursor-pointer text-[28px]" />
                        </span>
                      </div>
                    </div>
                    <span className="text mt-3 flex items-center justify-between font-poppins text-[13px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                      <div>
                        <span>manzil </span> - {item?.address}{" "}
                      </div>
                      /<span>2024-04-28</span>
                    </span>
                  </div>
                  <div className="mt-5 flex w-full items-center justify-between text-sm text-spanColor">
                    <span className="flex items-center justify-center">
                      <FaEye className="mr-3 text-[16px]" />
                      {item?.viewCount}
                    </span>
                    <span className="group/edit flex cursor-pointer items-center hover:underline">
                      {item?.categoryName}{" "}
                      <FaArrowRight className="ml-3 group-hover/edit:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setPage((index) => index - 1);
          }}
          disabled={page === 0}
        >
          prev
        </button>
        {/* {data?.data?.data?.content?.map((item, index = 1) => (
          
        ))} */}

        {numbers.map((item, index) => (
          <span
            onClick={() => setPage(index)}
            className={
              page === index
                ? "m-1 cursor-pointer border px-5 py-3 text-teal-500"
                : "m-1 cursor-pointer border px-5 py-3 text-red-500" ||
                    page > index
                  ? "m-1 cursor-pointer border px-5 py-3 text-red-500"
                  : "text-500-500 m-1 cursor-pointer border px-5 py-3"
            }
          >
            {index}
          </span>
        ))}
        <button
          onClick={() => {
            setPage((index) => index);
          }}
          disabled={page === numbers.length}
        >
          next
        </button>
      </div>
      <div className="mb-[50px] mt-[50px] flex items-center justify-center">
        <button className="flex h-[50px] w-[328px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[#1D828E] text-[#fff] ">
          <span className="font-medium not-italic leading-[100%] tracking-[-0.30px] ">
            Ko’proq ko’rsatish
          </span>
        </button>
      </div>
    </div>
  );
};

export default Products;
