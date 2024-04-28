import { Checkbox, Select, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Outlet, useSearchParams } from "react-router-dom";
import CategoryTab from "../components/categoryTab/CategoryTab";
import api from "../config/api/api";
import {
  createProduct,
  fileUplaodLoadedData,
  getCategoryPropertiesId,
} from "../exports/api";
import useToggle from "../hooks/useToggle";
import Container from "../shared/Container";
import AddProductLocation from "./addProductLocation";

export default function AddProductCategory() {
  const [params, setParams] = useSearchParams();
  const [regionId, setRegionId] = useState("");
  const [districtId, setDistrictId] = useState("");

  const [fileList, setFileList] = useState([]);

  const [propertiesData, setPropertiesData] = useState([]);
  const [selltype, setSellType] = useState([]);
  const [paymenttype, setPaymentType] = useState([]);
  const [queryName, setQueryName] = useState(params.get("categoryName") || "");
  const [queryId, setQueryId] = useState(params.get("categoryId") || "");
  const [fileListView, setFileListView] = useState([]);

  const [productInitData, setProductInitData] = useState({
    id: 0,
    name: "Mashinalar",
    price: 3400000000,
    canAgree: false,
    regionId: regionId,
    description: "bu mashinalar",
    categoryId: queryId,
    districtId: districtId,
    address: "Surkhandarya",
    sellTypeId: 1,
    paymentTypeId: 1,
    propertyValues: null,
    files: null,
  });
  const [nextProductData, setNextProductData] = useState([{}]);
  const { isOpen } = useToggle();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getSellType = async () => {
    const res = await api.get("/sell-type/all");
    const data = await res.data;
    setSellType(data?.data);
  };
  const getPaymenType = async () => {
    const res = await api.get("/payment-type/all");
    const data = await res.data;
    setPaymentType(data?.data);
  };

  const handleChoosen = async (name, id) => {
    try {
      const res = await getCategoryPropertiesId(id);
      setParams({ categoryName: name, categoryId: id });
      setQueryName(name);
      setQueryId(id);
      setNextProductData("");

      // Combine the fetched properties with nextProductData
      const combinedData = [...res?.data];

      // Set propertiesData state
      setPropertiesData(combinedData);
    } catch (error) {
      console.error("Xatolik sodir  bo'ldi:", error);
    }
  };

  const fielUplaod = (file) => {
    // Yangi FormData obyekti yaratiladi

    const imgFile = new FormData();
    // Tanlangan fayl img kalitiga joylashtiriladi
    imgFile.append("img", file);

    const imgList = new FileReader();

    imgList.addEventListener("load", () => {
      setFileListView([...fileListView, imgList?.result]);
    });

    imgList.readAsDataURL(file);

    // Fayllarni array obyektiga o'zlashtirish
    const data = fileUplaodLoadedData(file);
    data.then((res) => {
      // Fayl identifikatorini olish
      const fileId = res?.data?.id;

      // fileList ni yangilash
      setFileList((prevFileList) => [
        ...prevFileList,
        {
          id: 0, // Hozirgi faylning indeksi
          fileItemId: fileId, // Fayl identifikatori
          mainFile: prevFileList.length === 0, // Agar bu birinchi fayl bo'lsa
        },
      ]);
    });
  };
  const handleSubmit = async (e) => {
    // Category tanlanganini olish
    e.preventDefault();
    createProduct({
      ...productInitData,
      regionId: regionId,
      categoryId: queryId,
      canAgree: productInitData.canAgree ? true : false,
      districtId: districtId,
      propertyValues: nextProductData,
      files: fileList, // `fileList` yuborgan fayllar ro'yxati
    });

    // State yangilanadi
    setProductInitData({
      ...productInitData,
      propertyValues: nextProductData,
      files: fileList, // `fileList` yuborgan fayllar ro'yxati
    });
  };

  useEffect(() => {
    getSellType();
    getPaymenType();
  }, []);

  return (
    <div className="product-layout">
      <Container>
        <div
          className={`${
            scroll ? "mb-10 mt-[0px]" : "mb-10 mt-[181px]"
          } mt-[50px]`}
        >
          <div className="mb-16">
            <CategoryTab handleChoosen={handleChoosen} />
          </div>
          <h1 className="text-center font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]">
            {queryName}
          </h1>
        </div>
        {isOpen ? (
          <div className="relative">
            <div className="absolute  -top-24 z-[309] grid  grid-cols-1 gap-5 bg-[#FFFFFF] shadow-md ">
              <CategoryTab handleChoosen={handleChoosen} />
            </div>
          </div>
        ) : (
          open
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <div className="mb-10 w-[334px]">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                To’liq ism
              </span>
              <input
                type="text"
                className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
                placeholder="Imomova Mohizoda"
              />
            </div>
            <div className="mb-10 w-[334px]">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                E-mail
              </span>
              <input
                type="text"
                className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                placeholder="imomovamohizoda@gmail.com"
              />
            </div>
            <div className="mb-10 w-[334px]">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                Telefon nomer
              </span>
              <input
                type="text"
                className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                placeholder="+998900158502"
              />
            </div>
          </div>
          <AddProductLocation
            setDistrictId={setDistrictId}
            regionId={regionId}
            setRegionId={setRegionId}
          />
          <div className="flex items-center justify-start">
            <div className="mb-10 mr-[122px] w-[334px]">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                Sotuv turi
              </span>
              <Select
                type="text"
                className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border-[#E2E2E2] bg-[#FAFAFA]  font-poppins text-[16px] outline-none "
                placeholder="to'lov turini tanlang"
                onChange={(e) =>
                  setProductInitData({ ...productInitData, sellTypeId: e })
                } // Pass the function directly
              >
                {selltype.map((item) => (
                  <Select.Option key={item?.id} value={item?.id}>
                    {item?.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className="mb-10 mr-[122px] w-[334px]">
              <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                To&apos;lov turi
              </span>
              <Select
                type="text"
                className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border-[#E2E2E2] bg-[#FAFAFA]  font-poppins text-[16px] outline-none "
                placeholder="to'lov turini tanlang"
                onChange={(e) =>
                  setProductInitData({ ...productInitData, paymentTypeId: e })
                } // Pass the function directly
              >
                {paymenttype.map((item) => (
                  <Select.Option key={item?.id} value={item?.id}>
                    {item?.name}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="mb-10 w-full">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              E'lon nomi
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-full shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="e'lon nomini kiriting"
              required
              onChange={(e) =>
                setProductInitData({ ...productInitData, name: e.target.value })
              }
            />
          </div>
          ;
          <div className="grid grid-cols-3">
            {propertiesData?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mb-10 w-[334px]">
                    <div className="flex items-center justify-start">
                      <span className="mr-3 text-red-500">{"*"}</span>
                      <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                        {item?.name}
                      </span>
                    </div>
                    <input
                      type={
                        (item?.valueTypeDto?.typeName === "INTEGER" &&
                          "number") ||
                        (item?.valueTypeDto?.typeName === "STRING" && "text")
                      }
                      required
                      className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                      placeholder={item.name}
                      value={
                        nextProductData[index]?.stringValue ||
                        nextProductData[index]?.intValue ||
                        nextProductData[index]?.booleanValue ||
                        nextProductData[index]?.dateValue ||
                        ""
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        let stringValue =
                          nextProductData[index]?.stringValue || "";
                        let intValue = nextProductData[index]?.intValue || "";

                        // Property's value type detection
                        const valueType = item?.valueTypeDto?.typeName;

                        // Set values based on value type
                        if (valueType === "INTEGER") {
                          intValue = value;
                        } else if (valueType === "STRING") {
                          stringValue = value;
                        }

                        const updatedData = [...nextProductData]; // Copy the array
                        updatedData[index] = {
                          ...updatedData[index],
                          id: 0,
                          propertyId: item.id,
                          valueTypeId: item?.valueTypeDto?.id || 3,
                          stringValue,
                          intValue,
                        }; // Update the data in the array
                        setNextProductData(updatedData); // Update the state
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-10 w-full">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Tavsif{"(Tavsigfa to’liqroq ma’lumot yozing)"}
            </span>
            <textarea
              minLength={100}
              maxLength={1000}
              required
              className="mt-2 h-[218px] w-full shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="e'lon nomini kiriting"
              onChange={(e) =>
                setProductInitData({
                  ...productInitData,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-auto items-center justify-start ">
            <div className="mb-10 w-auto">
              <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
                narx kiriting
              </span>
              <input
                className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                placeholder="maxsulot narxini kiriting"
                required
                onChange={(e) =>
                  setProductInitData({
                    ...productInitData,
                    price: e.target.value,
                  })
                }
              />
            </div>

            <div className=" flex h-full w-auto items-center justify-center">
              <span className="ml-5 mr-5">
                <label htmlFor="uzs" className="ml-1 mr-2">
                  UZS
                </label>{" "}
                <Checkbox required id="uzs" autoFocus />
              </span>
              <span className="ml-5 mr-5">
                <label htmlFor="usd" className="ml-1 mr-2">
                  USD
                </label>
                <Checkbox required id="usd" />
              </span>
            </div>
          </div>
          <span className="text mx-10 block font-poppins text-[14px] font-normal leading-[22px] text-black">
            rasm kiriting
          </span>
          <div className="my-3 flex items-center justify-start">
            <div className="mb-10 w-auto">
              <div className="flex items-center justify-center">
                {fileListView?.map((item, index) => (
                  <img
                    src={`${item}`}
                    className="m-3 h-[150px] w-[150px] rounded-xl border shadow-lg"
                    key={index}
                    alt=""
                  />
                ))}
                <div class="flex w-full items-center justify-center">
                  <label
                    for="dropzone-file"
                    class="dark:hover:bg-bray-800 ml-10 mr-5 flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#1D828E] "
                  >
                    <div class="flex flex-col items-center justify-center pb-6 pt-5 text-gray-300">
                      <FaPlus />
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      onChange={(e) => fielUplaod(e.target.files[0])}
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="mb-10 w-auto">
              <Switch
                onChange={(e) =>
                  setProductInitData({ ...productInitData, canAgree: e })
                }
              />
              <span className="ml-3">
                {productInitData ? "kelishiladi" : "kelishilmaydi"}
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-start ">
            <div className="mb-10 w-full">
              <p className="text-right">{/* {'/ok'} */}</p>
            </div>
          </div>
          <div className="child-product">
            <Outlet />
          </div>
          <div className="mb-10 flex w-full items-center justify-start">
            <button
              className="border-input hover:bg-accent hover:text-accent-foreground mr-10 inline-flex h-11 items-center justify-center rounded-md border bg-white px-8 text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none"
              type="button"
            >
              Bekor qilish
            </button>
            <button
              className="ring-offset-background inline-flex h-11 items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              type="submit"
            >
              E’lonni yuklash
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
