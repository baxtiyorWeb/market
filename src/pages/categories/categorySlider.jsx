import { Input, List, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/api/api";

const CategorySlider = () => {
  const { id } = useParams();
  const [categoryChild, setCategoryChild] = useState([]);
  const [viewMore, setviewMore] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const getCategoryChildWithId = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/category/list?page=0&size=50&parentId=${id}`,
      );
      if (response?.status === 200) {
        if (response?.data?.data?.content?.length === 0) {
          return false;
        } else {
          setCategoryChild(response.data?.data);
        }
      }
    } catch (error) {
      error?.message;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoryChildWithId();
  }, [id]);

  return (
    <div className="h-auto">
      {categoryChild?.content?.length >= 0 ? (
        isLoading ? (
          <Spin style={{ color: "#FFBE1E" }} />
        ) : (
          <div className="flex flex-col items-start justify-center">
            <div className="w-full p-3">
              <h1 className="text my-1 text-base font-light">
                categoriyani tanlang
              </h1>
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="qidiring ..."
                className="ml-5   w-[80%]"
              />
              <List
                header={"bo'limlar"}
                loading={isLoading}
                className="mb-3 border-b-2 px-1"
                grid={0}
                dataSource={categoryChild?.content}
                renderItem={(item, index) => {
                  return index <= viewMore ? (
                    <List.Item key={index}>
                      <Link
                        to={`/category/${item?.id}`}
                        className={`mt-3 flex h-full w-full items-start justify-start  transition-none duration-150 `}
                        key={index}
                      >
                        {item?.name}
                      </Link>
                    </List.Item>
                  ) : (
                    ""
                  );
                }}
              />
              <div className="flex items-center justify-between">
                <h1>bo&apos;limlar</h1>

                {viewMore === 5 ? (
                  <button
                    className="underline"
                    onClick={() => {
                      setviewMore(categoryChild?.content?.length);
                    }}
                  >
                    ko&apos;proq
                  </button>
                ) : (
                  <button onClick={() => setviewMore(5)} className="underline">
                    yashirish
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default CategorySlider;
