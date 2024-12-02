import { useQuery } from "@tanstack/react-query";
import {
  FaEye,
  FaQuestionCircle,
  FaRegComments,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./../pages/categories/categories.css";
import SpinLoading from "../ui/loading/spinLoading";
import ChildCategories from "./categories/childCategories";
import { Container } from "../common/common";
import api from "../config/api/api";
const Search = () => {
  const { name } = useParams();
  const getproductgetFileterSearch = async (value) => {
    const res = await api.get(
      `/product/list?page=${0}&size=${10}&search=${value}`,  
    );
    return res.data?.data?.content;
  };
  const { data: productFilter, isLoading } = useQuery({
    queryKey: ["products", name],
    queryFn: () => getproductgetFileterSearch(name),
  }); // fetchData funksiyasiga tanlangan qidiruvni yuborish

  return (
    <Container>
      <ChildCategories />
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="product-section">
          <div className="col-span-2 row-span-2 grid grid-cols-3 border">
            {isLoading ? (
              <SpinLoading />
            ) : (
              productFilter?.map((item, index) => (
                <div
                  className="mb-10 mt-5 h-auto w-[280px] rounded-xl bg-white  shadow-md"
                  key={index}
                >
                  <div className="flex w-full flex-col justify-center p-1">
                    <div>
                      <img
                        className="h-[180px] w-full rounded-md  object-cover"
                        src={`data:image/png;base64,${item?.file?.fileBase64}`}
                        alt=""
                      />
                    </div>
                    <div className="relative  mt-10 h-auto w-full">
                      <div>
                        <div className="flex items-center justify-between p-1">
                          <h1 className="text-lg font-medium ">{item?.name}</h1>
                          <Link
                            to={`/details/${item?.id}?infoTab=1`}
                            className="absolute -top-10 right-3 rounded-md p-2 hover:underline"
                          >
                            Ko&apos;proq ma&apos;lumot olish
                          </Link>
                        </div>
                        <div className="inline-block items-center justify-center">
                          <span className="mr-1 text-base font-medium">
                            ${item?.price}
                          </span>
                          <span className="text-sm text-[#A7A7A7]">
                            <strike>$130.00</strike>
                          </span>
                          <div className="mt-2 flex items-center justify-start border-t pt-3">
                            <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                              <FaRegComments className="mr-1" />
                              <span className="mr-1">10</span>
                            </div>
                            <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                              <FaEye className="mr-1" />
                              <span className="mr-1">{item?.viewCount}</span>
                            </div>
                            <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                              <FaQuestionCircle className="mr-1" />
                              <span className="mr-1">10</span>
                            </div>
                          </div>
                          <div className="mx-1 my-3">
                            {item?.canAgree ? "kelishiladi" : "kelishilmaydi"}
                          </div>
                        </div>

                        <div className="my-3 flex items-center justify-start">
                          <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border p-[2px]">
                            <FaRegHeart className="mr-1" /> <span>saqlash</span>
                          </span>
                          <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border p-[2px]">
                            <FaQuestionCircle className="mr-1" />{" "}
                            <span>savol</span>
                          </span>
                          <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border p-[2px]">
                            <FaShare className="mr-1" /> <span>ulashish</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
