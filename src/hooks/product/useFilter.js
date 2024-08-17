import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getDistrictById,
  getPaymentTypes,
  getSellTypes,
} from "../../exports/api";

const useFilter = () => {
  const [manufacture, setManufacture] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  const [saveFilter, setSaveFilter] = useState([]);
  const [reFetch, setRefetch] = useState();
  const [saveLocal, setSaveLocal] = useState([]);
  const [searchParams] = useSearchParams();

  const regionId = searchParams.get("regionId") || 0;
  const { data: district } = useQuery({
    queryKey: ["district/all", regionId],
    queryFn: async () => await getDistrictById(regionId),
    enabled: !!regionId,
  });
  const { data: paymentType } = useQuery({
    queryKey: ["payment-type"],
    queryFn: getPaymentTypes,
  });
  const { data: sellType } = useQuery({
    queryKey: ["sell-type"],
    queryFn: getSellTypes,
  });

  return {
    setSaveFilter,
    saveFilter,
    setRefetch,
    setManufacture,
    manufacture,
    setSaveLocal,
    saveLocal,
    district,
    paymentType,
    sellType,
    setFilterValue,
    filterValue,
    reFetch,
  };
};

export default useFilter;
