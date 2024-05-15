import { useQuery } from "@tanstack/react-query";
import { Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import SegmentedUi from "../../ui/segmented/Segmented";
import BreadCrumbs from "./../../ui/breadcrumbs/BreadCrumbs";
import "./categories.css";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";

const ChildCategories = () => {
  // search list states
  const { id } = useParams();
  const searchParam = useSearchParams();
  const paramName = searchParam[0].get("category-name");
  const formatParamName = paramName?.split("-").join(" ");

  // data states
  const [regions, setRegions] = useState({
    regions: [],
    regionId: "",
  });
  const [categoryRoot, setCategoryRoot] = useState([]);
  const [categoryChild, setCategoryChild] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  const getCategoryChildWithId = async () => {
    try {
      setisLoading(true);
      const response = await api.get(
        `/category/list?page=0&size=50&parentId=${id}`,
      );
      if (response.status === 200) {
        setisLoading(false);
        if (response.data?.data?.content?.length <= 0) {
          return false;
        } else {
          setCategoryChild(response.data?.data?.content);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  };
  const getCategoryWithId = async () => {
    try {
      setisLoading(true);
      const response = await api.get(`/category/${id}`);
      if (response.status === 200) {
        setisLoading(false);
        if (response.data?.data?.length <= 0) {
          return false;
        } else {
          setCategory(response.data?.data);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  };

  const categoriesRootList = async () => {
    try {
      setisLoading(true);
      const response = await api.get(`/category/list?page=0&size=10&parentId=`);
      if (response.status === 200) {
        if (response.data?.data?.content?.length <= 0) {
          return false;
        } else {
          setCategoryRoot(response.data?.data?.content);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  };

  const regionsData = async () => {
    try {
      const response = await api.get("/region/all");
      if (response.status === 200) {
        if (response.data?.data?.length <= 0) {
          return false;
        } else {
          setRegions({ ...regions, regions: response.data?.data });
        }
      } else {
        return false;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  };

  const productList = async () => {
    const response = await api.get(
      `/product/list?page=0&size=10&search=&categoryId=${id}&regionId=${regions.regionId}`,
    );
    return response.data;
  };
  const { data: filteredProducts } = useQuery({
    queryKey: ["product", id, regions.regionId],
    queryFn: productList,
  });

  useEffect(() => {
    categoriesRootList();
    getCategoryChildWithId();
    getCategoryWithId();
    regionsData();
  }, [id]);

  return (
    <div className="child-categ h-full flex-col items-start justify-center ">
      <BreadCrumbs category={category} id={id} />

      <div className="flex  w-full items-center justify-start rounded-md">
        <h1 className="text-1xl mr-5 flex items-center justify-center">
          bosh categoriyalar
          <FaArrowRight className="text ml-3 mr-1 text-lg font-light" />
        </h1>
        <Space direction="horizontal">
          {categoryRoot?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  ?.split(", ")
                  ?.join("-")}`}
                className={`flex items-center justify-center rounded-md ${
                  paramName === item?.name
                    ? "flex h-10  bg-[#FEECC1] p-2 text-sm hover:bg-[#FEECC1] hover:bg-slate-500/10  hover:text-slate-900 "
                    : `h-10 rounded-md bg-[#F7F7F7] p-2 text-sm  hover:bg-slate-500/10  hover:text-slate-900`
                }`}
              >
                {" "}
                {item?.name}
              </Link>
              <span className="mx-1 text-spanColor"></span>
            </div>
          ))}
        </Space>
      </div>

      <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
        <h1>{formatParamName}</h1>
        <span className="text mx-3 mt-3 text-sm text-gray-500">
          {filteredProducts?.data?.content?.length === 0
            ? "e'lon mavjud emas"
            : filteredProducts?.data?.content?.length}
        </span>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="row-span-3 my-2 flex h-[max-content] w-[330px] flex-col rounded-2xl bg-white ">
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Saralash
            </div>
            <ProductFilter />
          </div>
        </div>
        <div className="product-section col-span-5 row-span-3 h-full w-full    p-3">
          <div className=" mt-5 flex h-max w-full  items-start justify-start  rounded-md  pb-5">
            <Space direction="horizontal" wrap className="w-full">
              {categoryChild?.map((item, index) => (
                <div className="flex items-center justify-center" key={index}>
                  <Link
                    to={`/category/${item?.id}?category-name=${item?.name
                      ?.split(", ")
                      ?.join("-")}`}
                    className={`group/item flex  items-center justify-center rounded-full border px-3 py-1  ${
                      paramName == item?.name
                        ? "flex  hover:text-slate-900 "
                        : `text-sm transition-all duration-75 hover:bg-bgColor/50 hover:text-textColor`
                    }`}
                  >
                    {item?.name}{" "}
                  </Link>
                  <span className="mx-1 text-spanColor"></span>
                </div>
              ))}
            </Space>
          </div>
          <div>
            <div className="my-5 flex items-center justify-between  rounded-md bg-white text-left text-[15px]  ">
              <div className="">
                <Select
                  className=" w-[230px]"
                  options={[
                    {
                      label: "Yangi kelganlar",
                      value: "Yangi kelganlar",
                    },
                    {
                      label: "eskilar",
                      value: "eskilar ",
                    },
                    {
                      label: "arzonlar ",
                      value: "arzonlar ",
                    },
                  ]}
                />
              </div>
              <div className="">
                <Select
                  className=" w-[230px]"
                  onChange={(e) => setRegions({ ...regions, regionId: e })}
                  placeholder="viloyatni tanlang"
                >
                  {regions.regions?.map((item, index) => (
                    <Select.Option key={index} value={item?.id}>
                      {item?.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>

              <SegmentedUi />
            </div>

            <ProductGetList
              productFilterProps={filteredProducts}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
