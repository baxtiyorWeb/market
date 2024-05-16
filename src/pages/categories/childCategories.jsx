import { useQuery } from "@tanstack/react-query";
import { Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import BreadCrumbs from "../../ui/breadcrumbs/BreadCrumbs";
import SegmentedUi from "../../ui/segmented/Segmented";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";

const ChildCategories = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Data states
  const [regions, setRegions] = useState({
    regions: [],
    regionId: searchParams.get("region"),
  });
  const [categoryRoot, setCategoryRoot] = useState([]);
  const [categoryChild, setCategoryChild] = useState([]);
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [productFilterSearch, setProductFilterSearch] = useState({
    value: searchParams.get("search") || "",
    save: [],
  });

  // Fetch child categories by id
  const getCategoryChildWithId = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/category/list?page=0&size=50&parentId=${id}`,
      );
      if (response.status === 200) {
        if (response.data?.data?.content?.length > 0) {
          setCategoryChild(response.data.data.content);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch category by id
  const getCategoryWithId = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/category/${id}`);
      if (response.status === 200) {
        if (response.data?.data?.length > 0) {
          setCategory(response.data.data);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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
  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    }
    if (productFilterSearch.value != "") {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const search = searchParams.get("search") || "";
  const region = searchParams.get("region") || "";

  // Fetch product list based on filters
  const productList = async () => {
    let regionIdFiltersetApi = "";
    let searchFiltersetApi = "";
    if (regions.regionId) {
      regionIdFiltersetApi = `&regionId=${regions.regionId}`;
    }
    if (productFilterSearch.value) {
      searchFiltersetApi = `&search=${productFilterSearch.value}`;
    }

    const response = await api.get(
      `/product/list?page=0&size=10&categoryId=${id}${regionIdFiltersetApi}${searchFiltersetApi}`,
    );
    return response.data;
  };

  const { data: filteredProducts } = useQuery({
    queryKey: ["product", id, regions.regionId, productFilterSearch.value],
    queryFn: productList,
  });

  useEffect(() => {
    categoriesRootList();
    getCategoryChildWithId();
    getCategoryWithId();
    regionsData();
  }, [id]);

  useEffect(() => {
    if (regions.regionId) {
      updateSearchParams("region", regions.regionId);
    }
    if (productFilterSearch.value) {
      updateSearchParams("search", productFilterSearch.value);
    }
  }, [regions.regionId, productFilterSearch.value]);

  return (
    <div className="child-categ h-full flex-col items-start justify-center">
      <BreadCrumbs category={category} id={id} />

      <div className="flex w-full items-center justify-start rounded-md">
        <h1 className="text-1xl mr-5 flex items-center justify-center">
          bosh categoriyalar
          <FaArrowRight className="text ml-3 mr-1 text-lg font-light" />
        </h1>
        <Space direction="horizontal">
          {categoryRoot?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}`}
                className="group/item flex items-center justify-center rounded-full border px-3 py-1 hover:bg-bgColor/50 hover:text-slate-900"
              >
                {item?.name}
              </Link>
              <span className="mx-1 text-spanColor"></span>
            </div>
          ))}
        </Space>
      </div>

      <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
        <span className="text mx-3 mt-3 text-sm text-gray-500">
          {filteredProducts?.data?.content?.length === 0
            ? "e'lon mavjud emas"
            : filteredProducts?.data?.content?.length}
        </span>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="row-span-3 my-2 flex h-[max-content] w-[330px] flex-col rounded-2xl bg-white">
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Saralash
            </div>
            <ProductFilter />
          </div>
        </div>
        <div className="product-section col-span-5 row-span-3 h-full w-full p-3">
          <div className="mt-5 flex h-max w-full items-start justify-start rounded-md pb-5">
            <Space direction="horizontal" wrap className="w-full">
              {categoryChild.length === 0
                ? "empty data"
                : categoryChild?.map((item, index) => (
                    <div
                      className="flex items-center justify-center"
                      key={index}
                    >
                      <Link
                        to={`/category/${item?.id}`}
                        className="group/item flex items-center justify-center rounded-full border px-3 py-1 hover:bg-bgColor/50 hover:text-slate-900"
                      >
                        {item?.name}
                      </Link>
                      <span className="mx-1 text-spanColor"></span>
                    </div>
                  ))}
            </Space>
          </div>
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
                  onChange={(e) => setRegions({ ...regions, regionId: e })}
                  placeholder="viloyatni tanlang"
                  value={region}
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
                  defaultValue={search}
                  onChange={(e) =>
                    setProductFilterSearch({
                      ...productFilterSearch,
                      value: e.target.value,
                    })
                  }
                />
                <span
                  className="flex h-10 w-10 cursor-pointer items-center justify-center border border-l-0 border-[#808080] bg-bgColor"
                  onClick={() => productList()}
                >
                  <FaSearch />
                </span>
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
