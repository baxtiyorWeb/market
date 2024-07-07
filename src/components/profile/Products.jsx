import { useQuery } from "@tanstack/react-query";
import { Input, Space, Spin, Table } from "antd";
import React, { useCallback, useEffect } from "react";
import { FaEye } from "react-icons/fa";
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
  const { data: products, isLoading } = useQuery({
    queryKey: ["product/list", token],
    queryFn: async () => await getUserProductFilter(),
  });

  useEffect(() => {}, [getUserProductFilter]);

  const columns = [
    {
      title: "rasmi",
      dataIndex: "file",
      editable: false,
      render: (file, index) => (
        <img
          key={index}
          src={`data:image/png;base64,${file.fileBase64}`}
          width={"150px"}
          height={"150px"}
          alt=""
        />
      ),
    },
    {
      title: "nomi",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "Narxi",
      dataIndex: "price",
      editable: true,
    },
    {
      title: "to'lov turi",
      dataIndex: "paymentTypeName",
      editable: true,
    },
    {
      title: "sotuv turi",
      dataIndex: "sellTypeName",
      editable: true,
    },
    {
      title: "ko'rilgan",
      dataIndex: "viewCount",
      editable: true,
    },
    {
      title: "viloyat",
      dataIndex: "regionName",
      editable: true,
    },
    {
      title: "tuman",
      dataIndex: "districtName",
      editable: true,
    },
    {
      title: "manzil",
      dataIndex: "addreess",
      editable: true,
    },
    {
      title: "kelishish",
      dataIndex: "canAgree",
      editable: true,
      render: (item) => {
        return <>{item ? "kelishiladi" : "kelishilmaydi"}</>;
      },
    },
    {
      title: "operation",
      dataIndex: "id",
      render: (record) => {
        return (
          <span>
            <Space size="middle" className="flex items-center justify-center">
              <span>
                <MdDelete
                  onClick={() => handleDelete(record)}
                  className="cursor-pointer text-center text-xl text-red-500"
                />
              </span>
              <Link to={`/details/${record}?infoTab=1`}>
                <FaEye className="cursor-pointer text-center text-xl text-teal-800" />
              </Link>
            </Space>
          </span>
        );
      },
    },
  ];
  console.log(products);
  return (
    <div className="p-3">
      {isLoading ? (
        <div className="flex w-full items-center justify-center border">
          <Spin
            style={{ color: "#FFBE1E !important" }}
            className="text-textColor"
          />
        </div>
      ) : (
        <>
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
          <Table
            columns={columns}
            dataSource={products?.data}
            loading={isLoading}
            key={products?.id}
          />
        </>
      )}
    </div>
  );
};

export default Products;
