import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useFilter from "./product/useFilter";
import api from "../config/api/api";

const useParamsFilter = () => {
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
      error.message;
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

  const clearFilter = () => {
    setFilter({
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
  };
  useEffect(() => {
    regionsData();
    categoriesRootList();
  }, [id, filter.regionId, filter.value, saveFilter]);

  
  const totalProducts =
    data?.pages?.reduce((acc, page) => acc + page.data.length, 0) || 0;
  return {
    totalProducts,
    district,
    regions,
    categoryRoot,
    isLoading,
    paymentType,
    sellType,
    data,
    filter,
    searchParams,
    id,
    setFilter,
    setSearchParams,
    clearFilter,
  };
};

export default useParamsFilter;
