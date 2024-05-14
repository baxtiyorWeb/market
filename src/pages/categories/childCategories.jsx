import { useQuery } from "@tanstack/react-query";
import { Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import api from "../../config/api/api";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../../exports/api";
import SegmentedUi from "../../ui/segmented/Segmented";
import BreadCrumbs from "./../../ui/breadcrumbs/BreadCrumbs";
import "./categories.css";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";

const ChildCategories = () => {
  const [searchFilterParams, setSearchFilterParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [regions, setRegions] = useState({
    regionData: [],
    regionId: 0,
  });

  const regionId = searchFilterParams.get("regionId");

  const fetchProduct = async (currentPage) => {
    setQueryParams();
    try {
      setIsLoading(true);
      const getid = await api.get(
        `/product/list?page=${currentPage}&size=5&search=&categoryId=${id}&regionId=${regionId}`,
      );
      setData(getid.data?.data?.content);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const setQueryParams = () => {
    setSearchFilterParams({ regionId: regions.regionId });

    if (searchFilterParams.get("regionId") === null || false) return false;
  };

  const { id } = useParams();
  const [getCategId, setCateggetId] = useState([]);
  const [lengthProduct, setLengthProduct] = useState([]);

  const searchParam = useSearchParams();
  const paramName = searchParam[0].get("category-name");
  const formatParamName = paramName?.split("-").join(" ");
  if (regions.regionId) {
    searchFilterParams.get("&regionId") || "";
  }

  const getRegionData = async () => {
    const res = await api.get("/region/all");
    setRegions({ ...regions, regionData: res.data.data });
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      const newData = await fetchProduct(page);
      if (newData && newData.length > 0) {
        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScrollDebounced = useDebouncedCallback(() => {
    if (
      !isLoading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 2000 &&
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight
    ) {
      loadData(); // Yuklash funksiyasini chaqiris
    }
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [handleScrollDebounced]);

  useEffect(() => {
    fetchProduct(0);
  }, [regions.regionId, regionId]);

  const {
    data: categories,
    // isLoading,
    error,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoriesRootLisId(id),
  });
  const { data: rootCategories } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoriesRootListSticky,
  });

  const productGetLength = async () => {
    const getid = await api.get(
      `/product/list?page=0&size=10&search=&categoryId=${id}`,
    );
    const res = getid.data;
    const data = await res?.data;
    setLengthProduct(data);
    console.log(lengthProduct);
  };
  const getCategoryId = async () => {
    const getid = await api.get(`/category/${id}`);
    const res = getid.data;
    const data = await res?.data;

    setCateggetId(data);
    productGetLength();
  };
  useEffect(() => {
    getCategoryId();
    getRegionData();
  }, []);
  // if (isLoading) return <Loading />;
  // if (error) return `Error: ${error}`;
  // console.log(categories);
  return (
    <div className="child-categ h-full flex-col items-start justify-center ">
      <BreadCrumbs categories={getCategId} categoryId={id} />

      <div className="flex  w-full items-center justify-start rounded-md">
        <h1 className="text-1xl mr-5 flex items-center justify-center">
          bosh categoriyalar{" "}
          <FaArrowRight className="text ml-3 mr-1 text-lg font-light" />
        </h1>
        <Space direction="horizontal">
          {rootCategories?.data?.content?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  ?.split(", ")
                  ?.join("-")}`}
                className={`flex items-center justify-center rounded-md ${
                  paramName == item?.name
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
          {lengthProduct?.content?.length === 0
            ? "e'lon mavjud emas"
            : lengthProduct?.content?.length}
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
              {categories?.data?.content?.map((item, index) => (
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
                  {regions.regionData?.map((item, index) => (
                    <Select.Option key={index} value={item?.id}>
                      {item?.name}
                    </Select.Option>
                  ))}
                </Select>
              </div>

              <SegmentedUi />
            </div>

            <ProductGetList productFilterProps={data} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
