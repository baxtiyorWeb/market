import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import React from "react";
import { getDistrict, getRegions } from "../exports/api";

const AddProductLocation = ({ regionId, setRegionId, setDistrictId }) => {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["regions"],
    queryFn: () => getRegions(), // Pass function reference
  });
  const { data: districtData } = useQuery({
    queryKey: ["district", regionId],
    queryFn: () => getDistrict(regionId), // Pass function reference and regionId as dependency
    enabled: regionId !== "", // Enable the query only when regionId is not empty
  });

  if (isPending) return "loading...";

  const getDistricts = (id) => {
    setRegionId(id);
    refetch();
  };

  const regions = data?.data || [];
  const districts = districtData?.data || [];

  return (
    <div className="flex w-full items-center justify-start">
      <div className="mb-10 mr-[122px] w-[334px]">
        <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
          Viloyatni tanlang
        </span>
        <Select
          type="text"
          className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border-[#E2E2E2] bg-[#FAFAFA]  font-poppins text-[16px] outline-none "
          placeholder="Viloyatni tanlang"
          onChange={getDistricts} // Pass the function directly
        >
          {regions.map((item) => (
            <Select.Option key={item?.id} value={item?.id}>
              {item?.name}
            </Select.Option>
          ))}
        </Select>
      </div>
      {regionId && (
        <div className="mb-10 w-[334px]">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            Tumanni tanlang
          </span>
          <Select
            type="text"
            className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border-[#E2E2E2] bg-[#FAFAFA]  font-poppins text-[16px] outline-none "
            placeholder="Tumanni tanlang"
            onChange={(e) => setDistrictId(e)} // Update regionId on change
          >
            <Select.Option>tanlang</Select.Option>
            {districts.map(
              (
                item, // Use districts here, not district?.data
              ) => (
                <>
                  <Select.Option key={item?.id} value={item?.id}>
                    {item?.name}
                  </Select.Option>
                </>
              ),
            )}
          </Select>
        </div>
      )}
    </div>
  );
};

export default AddProductLocation;
