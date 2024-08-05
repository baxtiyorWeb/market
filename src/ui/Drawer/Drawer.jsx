import { useState } from "react";
import { Sheet } from "react-modal-sheet";
import useParamsFilter from "../../hooks/useParamsFilter";
import { Select } from "antd";
import Exports from "../../data/export";

export const useToggleDrawer = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  return {
    isOpenDrawer,
    setOpenDrawer,
  };
};

const Drawer = ({ setOpenDrawer, isOpenDrawer }) => {
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

  return (
    <div>
      <Sheet isOpen={isOpenDrawer} onClose={() => setOpenDrawer(!isOpenDrawer)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="flex ">
              <select
                className=" w-[230px]"
                onChange={(e) => {
                  setFilter({ ...filter, regionId: e.target.value });
                }}
                placeholder="viloyatni tanlang"
              >
                {regions.regions?.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>

              {searchParams.get("regionId") && (
                <select
                  className=" w-[230px]"
                  onChange={(e) => {
                    setFilter({ ...filter, districtId: e.target.value });
                  }}
                  placeholder="tumanni tanlang"
                >
                  {district?.data?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              )}

              {
                <select
                  className=" w-[230px]"
                  onChange={(e) => {
                    setFilter({ ...filter, sellType: e.target.value });
                  }}
                  placeholder="to'lov turini tanlang"
                >
                  {sellType?.data?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              }
              {
                <select
                  className=" w-[230px]"
                  onChange={(e) => {
                    setFilter({ ...filter, paymentType: e.target.value });
                  }}
                  placeholder="sotuv turini tanlang"
                >
                  {paymentType?.data?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              }
            </div>
            <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
              <span className="text   text-sm text-gray-500">
                {data?.data?.data?.content?.length === 0
                  ? "e'lon mavjud emas"
                  : data?.data?.data?.content?.length}
              </span>
            </div>
            <div className="my-5 flex w-full items-center justify-center overflow-scroll">
              <Exports />
            </div>

            {filter && (
              <button
                className="absolute bottom-5 right-5"
                onClick={() => setOpenDrawer(false)}
              >
                tayyor
              </button>
            )}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default Drawer;
