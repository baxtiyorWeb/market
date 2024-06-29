import { useQuery } from "@tanstack/react-query";
import { Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import api from "./../../config/api/api";
const Products = () => {
  const { token } = useUser();
  const getUserProductFilter = useCallback(async () => {
    const res = await api.post("/product/list", {
      search: "",
      page: 0,
      size: 10,
      categoryId: 0,
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: true,
      price: null,
      valueFilter: [],
    });
    return res.data;
  }, []);
  const { data: products } = useQuery({
    queryKey: ["product/list", token],
    queryFn: async () => await getUserProductFilter(),
  });

  useEffect(() => {}, [getUserProductFilter]);

  return (
    <div className="p-3">
      <div className="mb-3 flex h-[80px] w-full items-center justify-between">
        <Input
          placeholder="mahsulotni qidiring"
          className="mr-5 h-[50px] w-[400px]"
        />
        <Link
          className="flex h-[50px]  items-center justify-center rounded-md bg-bgColor p-5 text-white"
          to={"/product-form/add-product"}
        >
          Mahsulot qo&apos;shish
        </Link>
      </div>
      <table className="h-full w-full">
        <thead className="h-14 bg-[#E2E2E2] text-[13px]  font-semibold shadow-md">
          <tr>
            <th>Surati</th>
            <th>mahsulot nomi</th>
            <th>narxi</th>
            <th>sana</th>
            <th>ko&apos;rilgan</th>
            <th>harakat</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="relative top-5 ">
          {products?.data?.map((item) => (
            <tr key={item?.id} className="mb-10 border-b hover:bg-gray-200/50">
              <td>
                <img
                  className="h-[100px] w-[100px]"
                  src={`data:image/jpeg;base64,${item?.file?.fileBase64}`}
                  alt=""
                />
              </td>
              <td>{item?.name}</td>
              <td>{item.price} </td>
              <td>02.02.22 | 15:33</td>
              <td>{item?.viewCount} marta</td>
              <td className="">
                <span className="flex items-center justify-center">
                  <FaHeart className="mr-3" /> <b className="">2</b>
                </span>
              </td>
              <td>
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
