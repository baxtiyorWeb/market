import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../../config/api/api";
const MyFavourites = () => {
  const myFavourites = async () => {
    const res = await api.get(
      "/favorite-product/list?page=0&size=10&additionalProp3=string",
    );
    return res.data?.data?.content;
  };
  const { data: myFavorite } = useQuery({
    queryKey: ["favorite-product"],
    queryFn: myFavourites,
  });
  return (
    <>
      {myFavorite?.map((item) => (
        <div>{item?.name}</div>
      ))}
    </>
  );
};

export default MyFavourites;
