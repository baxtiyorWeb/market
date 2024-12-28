import { useQuery } from "react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getDistrictById,
  getPaymentTypes,
  getSellTypes,
} from "../../exports/api";

const useFilter = () => {
  const [filterValue, setFilterValue] = useState([]);
  const [saveFilter, setSaveFilter] = useState([]);
  const [reFetch, setRefetch] = useState();
  const [saveLocal, setSaveLocal] = useState([]);
  const [searchParams] = useSearchParams();

  const regionId = searchParams.get("regionId") || 0;
  const sellTypeId = searchParams.get("sellTypeId") || 0;
  const paymentTypeId = searchParams.get("paymentTypeId") || 0;

  const { data: district } = useQuery({
    queryKey: ["district/all", regionId],
    queryFn: async () => await getDistrictById(regionId),
    enabled: !!regionId,
  });
  const { data: paymentType } = useQuery({
    queryKey: ["payment-type"],
    queryFn: getPaymentTypes,
    enabled: !!paymentTypeId,
  });
  const { data: sellType } = useQuery({
    queryKey: ["sell-type"],
    queryFn: getSellTypes,
    enabled: !!sellTypeId,
  });

  return {
    setSaveFilter,
    saveFilter,
    setRefetch,
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
