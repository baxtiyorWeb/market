import { Select, Space } from "antd";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../ui/breadcrumbs/BreadCrumbs";
import "./categories.css";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";
import useParamsFilter from "../../hooks/useParamsFilter";

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
  } = useParamsFilter();

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
      <span className="text text-base text-textColor ">
        <b>{totalProducts}</b> Ta Mahsulot topildi
      </span>
      <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
        <span className="text   text-sm text-gray-500">
          {data?.data?.data?.content?.length === 0
            ? "e'lon mavjud emas"
            : data?.data?.data?.content?.length}
        </span>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="child-category row-span-3 my-2 flex h-[max-content] w-[330px] flex-col rounded-2xl bg-white xs:hidden">
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
            <div className=" my-5 grid h-auto grid-cols-4 items-center justify-between gap-3 rounded-md bg-white text-left text-[15px]">
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

            <ProductGetList isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
