import { Select } from "antd";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useParamsFilter from "../../hooks/useParamsFilter";
import Container from "../../shared/Container";
import Drawer from "../../ui/Drawer/Drawer";
import BreadCrumbs from "../../ui/breadcrumbs/BreadCrumbs";
import "./categories.css";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";

const ChildCategories = () => {
  const {
    categoryRoot,
    district,
    isLoading,
    paymentType,
    regions,
    sellType,
    totalProducts,
    data,
    filter,
    searchParams,
    id,
    setFilter,
    setSearchParams,
    clearFilter,
  } = useParamsFilter();
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const params = useSearchParams();
  const [dir, setDir] = useState("vertical");

  const handleResize = () => {
    if (window.innerWidth <= 1023) {
      setDir("vertical");
    } else {
      setDir("horizontal");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dir]);

  return (
    <div className="child-categ h-full  items-start justify-center lg:w-full xs:w-full 2xs:w-full 3xs:w-full ">
      <div className="mb-3 flex w-full  items-center justify-start rounded-md  ">
        <div className="mt-3 flex w-full items-center justify-between sm:grid sm:grid-cols-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg_min_c:flex lg_min_c:border lg_min_c:border-none xs:grid xs:grid-cols-2">
          {categoryRoot?.map((item, index) => (
            <div
              className="justify-ceenter flex items-center  3xs:text-[13px]"
              key={index}
            >
              <Link
                to={`/category/${item?.id}`}
                className={`
                 ${
                   item?.id === id
                     ? `group/item flex  items-center justify-center border-b  border-b-bgColor border-b-transparent px-3 py-1  hover:text-slate-900`
                     : `group/item flex items-center justify-center border-b  border-b-transparent px-3 py-1 hover:border-b-bgColor hover:text-slate-900`
                 }`}
              >
                {item?.name}
              </Link>
              <span className="mx-1 text-spanColor"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <BreadCrumbs />
      </div>
      <div className="flex items-center justify-between">
        <span className="text text-base text-textColor ">
          {params[0].get("search") ? (
            totalProducts === 0 ? (
              <div>
                <b>{params[0].get("search")}</b> bo&apos;yicha mahsulot
                topilmadi
              </div>
            ) : (
              <div>
                <b> {params[0].get("search")}</b> bo&apos;yicha
                <b className="mx-1">{totalProducts}</b> ta mahsulot topildi
              </div>
            )
          ) : totalProducts === 0 ? (
            <div>
              <b>{totalProducts}</b> mahsulot topilmadi
            </div>
          ) : (
            <div>
              <b>{totalProducts}</b> Ta Mahsulot topildi
            </div>
          )}
        </span>
        <button
          className="lg_min_c:hidden"
          onClick={() => setOpenDrawer(!isOpenDrawer)}
        >
          filterlash
        </button>
      </div>
      <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
        <span className="text   text-sm text-gray-500">
          {data?.data?.data?.content?.length === 0
            ? "e'lon mavjud emas"
            : data?.data?.data?.content?.length}
        </span>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="child-category row-span-3 my-2 flex h-[max-content] flex-col rounded-2xl bg-white lg:hidden lg:border lg:border-blue-500 xs:hidden">
            <div className="my-5  border-b border-b-gray-500 text-left text-[15px] font-bold lg:w-[90%]">
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
        <div className="relative col-span-5 row-span-3 h-full">
          {
            <div className="flex justify-end px-5 lg:w-full">
              <button
                className="rounded-md border border-bgColor px-3 text-textColor hover:bg-bgColor hover:text-textColor"
                onClick={clearFilter}
              >
                filterni tozalash
              </button>
            </div>
          }
          <div className="lg:w-full">
            <Drawer setOpenDrawer={setOpenDrawer} isOpenDrawer={isOpenDrawer} />
            <div className="my-5 grid h-auto grid-cols-4 items-center justify-between gap-3 rounded-md bg-white text-left text-[15px] md:hidden md:max-w-full lg:hidden xs:grid xs:grid-cols-2">
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
            </div>
          </div>
          <ProductGetList isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
