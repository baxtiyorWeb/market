import { Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import useFilter from "../../hooks/product/useFilter";
import BreadCrumbs from "../../ui/breadcrumbs/BreadCrumbs";
import SegmentedUi from "../../ui/segmented/Segmented";
import "./categories.css";
import CategorySlider from "./categorySlider";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";

const ChildCategories = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, saveFilter, manufacture } = useFilter();
  // Data states
  const [regions, setRegions] = useState({
    regions: [],
    regionId: searchParams.get("regionId"),
  });
  const [categoryRoot, setCategoryRoot] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const propertyName = manufacture.propertyName;
  const propertyValue = manufacture.propertyValue;
  const [filter, setFilter] = useState({
    search: "",
    regionId: "",
    price_min: "",
    price_max: "",
  });
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      search: params.search || "",
      regionId: params.regionId || "",
      price_min: params.price_min || "",
      price_max: params.procie_max || "",
    });
  }, []);

  useEffect(() => {
    const params = {};
    if (filter.search) params.search = filter.search;
    if (filter.regionId) params.regionId = filter.regionId;
    if (filter.price_min) params.price_min = filter.price_min;
    if (filter.price_max) params.price_max = filter.price_max;
    if (filter.propertyId) params.propertyId = filter.propertyId;
    setSearchParams(params);
  }, [filter]);

  // const filterProducts = () => {
  //   let filteredProduct = [...products];

  //   if (filter.search) {
  //     filteredProduct = filteredProduct.filter((product) =>
  //       product.name.toLowerCase().includes(filter.search.toLowerCase()),
  //     );
  //   }
  //   if (filter.regionId) {
  //     filteredProduct = filteredProduct.filter(
  //       (product) => product.regionId === filter.regionId,
  //     );
  //   }
  //   if (filter.price) {
  //     const [minPrice, maxPrice] = filter.price.split("-").map(Number);
  //     filteredProduct = filteredProduct.filter(
  //       (product) => product.price >= minPrice && product.price <= maxPrice,
  //     );
  //   }

  //   return filteredProduct;
  // };

  // const filters = filterProducts();
  // Fetch child categories by id

  // Fetch category by id

  // Fetch root categories
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
      setError(error.message);
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

  // Update search parameters

  // Fetch product list based on filters

  useEffect(() => {
    categoriesRootList();
    regionsData();
  }, [id, filter.regionId, filter.value, saveFilter]);

  /* -------------------------------------------------------------------------- */
  /*                                    other functionally                                   */
  /* -------------------------------------------------------------------------- */
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
        <span className="text mx-3  text-sm text-gray-500">
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
        <div className="col-span-5 row-span-3 h-full w-[1053px]   p-3 px-10">
          <CategorySlider />
          <div>
            <div className="my-5 flex items-center justify-between rounded-md bg-white text-left text-[15px]">
              <div>
                <Select
                  className="w-[230px]"
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
              <div>
                <Select
                  className="w-[230px]"
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
              </div>

              <div className="flex items-center justify-center">
                <Input
                  placeholder="e'lonlarni qidirish"
                  className="h-10 rounded-br-none rounded-tr-none focus:border-none"
                  onChange={(e) =>
                    setFilter({ ...filter, search: e.target.value })
                  }
                />
                <span
                  className="flex h-10 w-10 cursor-pointer items-center justify-center border border-l-0 border-[#808080] bg-bgColor"
                  // onClick={() => productList()}
                >
                  <FaSearch />
                </span>
              </div>

              <SegmentedUi />
            </div>

            <ProductGetList isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
