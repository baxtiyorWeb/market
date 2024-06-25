import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Space, Table, message } from "antd";
import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../../config/api/api";
import { deleteFavorite } from "../../../exports/api";
import Loading from "../../../ui/loading/Loading";
const MyFavourites = () => {
  const queryClient = useQueryClient();
  const myFavourites = async () => {
    const res = await api.get(
      "/favorite-product/list?page=0&size=10&additionalProp3=string",
    );
    return res.data?.data?.content;
  };
  const { data: myFavorite, refetch } = useQuery({
    queryKey: ["favorite-product"],
    queryFn: myFavourites,
  });
  const myFavouritesList = localStorage.getItem("product") || [];
  const getUserFavouriteProductList = async () => {
    const res = await api.post("/product/list", {
      search: "",
      page: 0,
      size: 10,
      categoryId: 0,
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      price: null,
      valueFilter: [],
      productIdList: JSON.parse(myFavouritesList),
    });
    return res.data;
  };
  const { data: favorites, isLoading } = useQuery({
    queryKey: ["product/list", myFavouritesList],
    queryFn: async () => await getUserFavouriteProductList(),
  });
  useEffect(() => {
    getUserFavouriteProductList();
  }, []);

  const columns = [
    {
      title: "rasmi",
      dataIndex: "file",
      editable: false,
      render: (file) => (
        <img
          key={file}
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

  const deleteMutation = useMutation({
    mutationKey: ["favorite-product"],
    mutationFn: deleteFavorite,
    onSuccess: async () => {
      message.success(`malumot o'chirildi `);
      await queryClient.invalidateQueries(myFavorite);
    },
  });
  const handleDelete = async (id) => {
    await deleteMutation.mutateAsync(id);
    refetch();
  };

  if (isLoading) return <Loading />;
  return (
    <div className="h-full">
      <Table
        columns={columns}
        dataSource={favorites?.data}
        loading={isLoading}
        key={1}
      />
    </div>
  );
};

export default MyFavourites;
