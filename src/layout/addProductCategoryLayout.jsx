import { Checkbox, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import {
  createProduct,
  fileUplaodLoadedData,
  getCategories,
  getCategoryPropertiesId,
} from "../exports/api";
import useToggle from "../hooks/useToggle";
import Container from "../shared/Container";
import Overlay from "../ui/Overlay";

export default function AddProductCategory() {
  const [params, setParams] = useSearchParams();

  const [fileList, setFileList] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [queryName, setQueryName] = useState(params.get("categoryName") || "");
  const [queryId, setQueryId] = useState(params.get("categoryId") || "");

  const [productInitData, setProductInitData] = useState({
    id: 0,
    name: "Mashinalar",
    price: 3400000000,
    canAgree: true,
    description: "bu mashinalar",
    categoryId: queryId,
    districtId: 13,
    address: "Surkhandarya",
    sellTypeId: 3,
    paymentTypeId: 3,
    propertyValues: null,
    files: null,
  });
  const [nextProductData, setNextProductData] = useState([{}]);

  const { handleToggle, isOpen } = useToggle();

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
      console.error("Xatolik sodir bo'ldi:", error);
    }
  };

  const ProductFileUplaod = () => {
    return (
      <>
        <input
          type="file"
          onChange={(e) => fielUplaod(e.target.files[0])}
          multiple
        />
      </>
    );
  };

  const fielUplaod = (file) => {
    // Yangi FormData obyekti yaratiladi
    const imgFile = new FormData();
    // Tanlangan fayl img kalitiga joylashtiriladi
    imgFile.append("img", file);

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
          deleted: false,
        },
      ]);
    });
  };

  const handleSubmit = async () => {
    // Category tanlanganini olish
    createProduct({
      ...productInitData,
      categoryId: queryId,
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

  const ChildCategories = ({ child }) => {
    return (
      <>
        {child?.childCategories?.map((item, index = 1) => (
          <div key={index} className={`ml-${index * 10}`}>
            <button
              className={` w-fit cursor-pointer text-sm hover:underline`}
              onClick={() => handleChoosen(item?.name, item?.id)}
            >
              {item?.name}
            </button>

            <ChildCategories child={item} />
          </div>
        ))}
      </>
    );
  };

  const SelectCategory = () => {
    const [items, setItems] = useState([]);
    const getCategoriesParentAndChildren = async () => {
      const category = getCategories();
      category.then((res) => {
        setItems(res?.data);
      });
    };
    useEffect(() => {
      getCategoriesParentAndChildren();
    }, []);

    function childCategories(child) {
      console.log(child?.childCategories);
    }

    return (
      <>
        {items?.map((item, index) => (
          <div key={index}>
            <button
              onClick={() =>
                item?.childCategories.length > 0
                  ? childCategories(item)
                  : handleChoosen(item?.name, item?.id)
              }
              className={
                item?.childCategories?.length > 0
                  ? ` mb-5 text-xl font-medium text-teal-600`
                  : `w-fit cursor-pointer text-sm hover:underline`
              }
            >
              {item?.name}
            </button>
            <ChildCategories child={item} />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="product-layout">
      <Container>
        <h1 className="mt-10 text-center  text-[30px] text-[#1d828e]">
          {queryName}
        </h1>
        <div
          className={`${
            scroll ? "mb-10 mt-[0px]" : "mb-10 mt-[181px]"
          } mt-[50px]`}
        >
          <div>
            <button
              onClick={handleToggle}
              className="ring-offset-background mb-16 inline-flex h-10 select-none items-center justify-center rounded-md border border-[#1D828E] bg-white px-4 py-2 text-sm font-medium text-[#1D828E] transition-colors duration-200 ease-in-out hover:bg-[#1D828E] hover:text-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Kategoriyani tanlang
            </button>
          </div>
          <h1 className="text inline  font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]"></h1>
        </div>
        {isOpen ? <Overlay closed={handleToggle} /> : isOpen}
        {isOpen ? (
          <div className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-[302] grid w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#FFFFFF] p-6 py-10 shadow-lg duration-200 sm:rounded-lg md:w-full">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              <SelectCategory />
            </div>
          </div>
        ) : (
          open
        )}
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
        <div className="mb-10 w-full">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            E'lon nomi
          </span>
          <input
            type="text"
            className="mt-2 h-[50px] w-full shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
            placeholder="e'lon nomini kiriting"
            onChange={(e) =>
              setProductInitData({ ...productInitData, name: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-3">
          {propertiesData?.map((item, index) => {
            return (
              <div>
                <div className="mb-10 w-[334px]">
                  <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                    {item?.name}
                  </span>
                  <input
                    type="text"
                    className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                    placeholder={item.name}
                    value={
                      nextProductData[index]?.stringValue ||
                      "" ||
                      nextProductData[index]?.intValue ||
                      "" ||
                      nextProductData[index]?.booleanValue ||
                      "" ||
                      nextProductData[index]?.dateValue ||
                      ""
                    } // Ensure stringValue exists and provide default value
                    onChange={(e) => {
                      const stringValue = e.target.value;
                      let intValue = ""; // Odatiy qiymatlar
                      let booleanValue = "";
                      let doubleValue = "";
                      let dateValue = "";

                      // Propertyning value type'ini aniqlash
                      const valueType =
                        item?.propertyDto?.valueTypeDto?.name.toLowerCase();

                      // Qiymat turiga qarab mos parametrlarni sozlash
                      if (valueType === "number") {
                        intValue = stringValue;
                      } else if (valueType === "boolean") {
                        booleanValue = stringValue.toLowerCase() === "true";
                      } else if (valueType === "date") {
                        dateValue = stringValue;
                      } else if (valueType === "double") {
                        doubleValue = stringValue;
                      }

                      const updatedData = [...nextProductData]; // Arrayni ko'chirib olish
                      updatedData[index] = {
                        ...updatedData[index],
                        id: 0,
                        propertyId: item.id,
                        valueTypeId: item?.propertyDto?.valueTypeDto?.id || 3,
                        stringValue,
                        intValue,
                        booleanValue,
                        doubleValue,
                        dateValue,
                      }; // Massivdagi ma'lumotni yangilash
                      setNextProductData(updatedData); // Holatni yangilash
                    }}
                  />
                </div>
              </div>
            );

            // Return the input component with its label
          })}
        </div>

        <div className="mb-10 w-full">
          <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
            Tavsif{"(Tavsigfa to’liqroq ma’lumot yozing)"}
          </span>
          <textarea
            minLength={100}
            maxLength={1000}
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
              <Checkbox id="uzs" autoFocus />
            </span>
            <span className="ml-5 mr-5">
              <label htmlFor="usd" className="ml-1 mr-2">
                USD
              </label>
              <Checkbox id="usd" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="mb-10 w-auto">
            <ProductFileUplaod />
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="mb-10 w-auto">
            <Switch
              checked={productInitData.canAgree}
              // onChange={(e) => setProductInitData(e)}
            />
            <span className="ml-3">
              {productInitData ? "kelishiladi" : "kelishilmaydi"}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start ">
          <div className="mb-10 w-full">
            <p className="text-right">
              {/* {fileList.length === 0 ? (
                "4 tagacha rasm tanlang"
              ) : (
                <>
                  siz
                  <span className="ml-1 mr-1 font-bold text-[#1d828e]">
                    {fileList.length}
                  </span>
                  ta rasm yukladingiz
                </>
              )} */}
            </p>
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
            onClick={() => handleSubmit()}
          >
            E’lonni yuklash
          </button>
        </div>
      </Container>
    </div>
  );
}
