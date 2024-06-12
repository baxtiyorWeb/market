import { Select, Space, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import useFilter from "../../hooks/product/useFilter";
import BreadCrumbs from "../../ui/breadcrumbs/BreadCrumbs";
import "./categories.css";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";

const ChildCategories = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, saveFilter, district, paymentType, sellType } = useFilter();
  // Data states
  const [regions, setRegions] = useState({
    regions: [],
    regionId: searchParams.get("regionId"),
  });
  const [categoryRoot, setCategoryRoot] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    regionId: "",
    districtId: "",
    categoryId: "",
    propertyId: "",
    canAgree: "",
    paymentType: "",
    sellType: "",
    price_min: "",
    price_max: "",
  });
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      search: params.search || "",
      regionId: params.regionId || "",
      districtId: params.districtId || "",
      categoryId: params.categoryId || "",
      propertyId: params.propertyId || "",
      canAgree: params.canAgree || "",
      paymentType: params.paymentType || "",
      sellType: params.sellType || "",
      price_min: params.price_min || "",
      price_max: params.procie_max || "",
    });
  }, []);

  useEffect(() => {
    const params = {};
    if (filter.search) params.search = filter.search;
    if (filter.regionId) params.regionId = filter.regionId;
    if (filter.districtId) params.districtId = filter.districtId;
    if (filter.canAgree) params.canAgree = filter.canAgree;
    if (filter.paymentType) params.paymentType = filter.paymentType;
    if (filter.categoryId) params.categoryId = filter.categoryId;
    if (filter.propertyId) params.propertyId = filter.propertyId;
    if (filter.sellType) params.sellType = filter.sellType;
    if (filter.price_min) params.price_min = filter.price_min;
    if (filter.price_max) params.price_max = filter.price_max;
    setSearchParams(params);
  }, [filter]);

  const categoriesRootList = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/category/list?page=0&size=10&parentId=`);
      if (response.status === 200) {
        if (response.data?.data?.content?.length >= 0) {
          setCategoryRoot(response.data.data.content);
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch regions
  const regionsData = async () => {
    try {
      const response = await api.get("/region/all");
      if (response.status === 200) {
        if (response.data?.data?.length > 0) {
          setRegions((prev) => ({ ...prev, regions: response.data.data }));
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    categoriesRootList();
    regionsData();
  }, [id, filter.regionId, filter.value, saveFilter]);

  return (
    <div className="child-categ h-full flex-col items-start justify-center ">
      <div className="mb-3 flex w-full items-center justify-start rounded-md">
        <Space
          direction="horizontal"
          className="flex w-full items-center justify-between"
        >
          {categoryRoot?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}`}
                className={`
                 ${
                   item?.id === id
                     ? `group/item flex items-center justify-center border-b  border-b-bgColor border-b-transparent px-3 py-1  hover:text-slate-900`
                     : `group/item flex items-center justify-center border-b  border-b-transparent px-3 py-1 hover:border-b-bgColor hover:text-slate-900`
                 }`}
              >
                {item?.name}
              </Link>
              <span className="mx-1 text-spanColor"></span>
            </div>
          ))}
        </Space>
      </div>

      <BreadCrumbs />

      <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
        <span className="text   text-sm text-gray-500">
          {data?.data?.data?.content?.length === 0
            ? "e'lon mavjud emas"
            : data?.data?.data?.content?.length}
        </span>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="child-category row-span-3 my-2 flex h-[max-content] w-[330px] flex-col rounded-2xl bg-white">
            <div className=" my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Saralash
            </div>
            <ProductFilter
              filter={filter}
              setFilter={setFilter}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
        </div>
        <div className="col-span-5 row-span-3 h-full w-[1053px]   ">
          <div>
            <div className="my-5 grid h-auto grid-cols-4 items-center justify-between gap-3 rounded-md bg-white text-left text-[15px]">
              <Select
                className=" w-[230px]"
                onChange={(e) => {
                  setFilter({ ...filter, regionId: e });
                }}
                placeholder="viloyatni tanlang"
              >
                {regions.regions?.map((item, index) => (
                  <Select.Option key={index} value={item?.id}>
                    {item?.name}
                  </Select.Option>
                ))}
              </Select>

              {searchParams.get("regionId") && (
                <Select
                  className=" w-[230px]"
                  onChange={(e) => {
                    setFilter({ ...filter, districtId: e });
                  }}
                  placeholder="tumanni tanlang"
                >
                  {district?.data?.map((item, index) => (
                    <Select.Option key={index} value={item?.id}>
                      {item?.name}
                    </Select.Option>
                  ))}
                </Select>
              )}

              {
                <Select
                  className=" w-[230px]"
                  onChange={(e) => {
                    setFilter({ ...filter, sellType: e });
                  }}
                  placeholder="to'lov turini tanlang"
                >
                  {sellType?.data?.map((item, index) => (
                    <Select.Option key={index} value={item?.id}>
                      {item?.name}
                    </Select.Option>
                  ))}
                </Select>
              }
              {
                <Select
                  className=" w-[230px]"
                  onChange={(e) => {
                    setFilter({ ...filter, paymentType: e });
                  }}
                  placeholder="sotuv turini tanlang"
                >
                  {paymentType?.data?.map((item, index) => (
                    <Select.Option key={index} value={item?.id}>
                      {item?.name}
                    </Select.Option>
                  ))}
                </Select>
              }

              <div className="flex w-[230px] cursor-pointer items-center justify-center ">
                <label
                  className="w-[230px] cursor-pointer"
                  name="canAgree"
                  htmlFor="canAgree"
                >
                  {Boolean(searchParams.get("canAgree"))
                    ? "kelishiladi"
                    : "kelishilmaydi"}
                </label>
                <Switch
                  id="canAgree"
                  className="bg-bgColor "
                  onChange={(e) => setFilter({ ...filter, canAgree: e })}
                />
              </div>
            </div>

            <ProductGetList isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
