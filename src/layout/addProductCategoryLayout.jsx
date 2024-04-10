import { Checkbox, Switch } from "antd";
import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import {
  createProduct,
  fileUplaodLoadedData,
  getCategoryPropertiesId,
} from "../exports/API";
import useCategories from "../hooks/useCategories";
import useToggle from "../hooks/useToggle";
import Container from "../shared/Container";
import Overlay from "../ui/Overlay";

export default function AddProductCategory() {
  const [params, setParams] = useSearchParams();
  const [fileList, setFileList] = useState();
  const [queryName, setQueryName] = useState(params.get("categoryName") || "");
  const [queryId, setQueryId] = useState(params.get("categoryId") || "");
  const [selectCategoryId, setSelectCategoryId] = useState([]);

  const fielUplaod = (file) => {
    const imgFile = new FormData();

    imgFile.append("img", file);

    const data = fileUplaodLoadedData(file);

    data.then((res) => {
      setProductInitData({
        ...productInitData,
        files: [
          { id: 0, fileItemId: res?.data?.id, mainFile: true, deleted: false },
        ],
      });
    });
  };

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

  const { handleToggle, isOpen } = useToggle();
  const { categories } = useCategories();
  const handleChoosen = async (name, id) => {
    try {
      const res = await getCategoryPropertiesId(id);
      const categoryPropertyForms = res?.data?.map((item) => ({
        id: 0,
        propertyId: item.id,
        valueTypeId: 3,
        intValue: 0,
        stringValue: "string",
        booleanValue: true,
        doubleValue: 0,
        dateValue: "2024-04-10T10:34:22.917Z",
      }));

      setParams({ categoryName: name, categoryId: id });
      setQueryName(name);
      setQueryId(id);

      setSelectCategoryId(categoryPropertyForms);
      console.log(categoryPropertyForms);
      setProductInitData((prevData) => ({
        ...prevData,
        categoryId: id,
        propertyValues: categoryPropertyForms,
      }));
    } catch (error) {
      console.error("Xatolik sodir bo'ldi:", error);
    }
  };
  function ChildCategories({ childrens }) {
    return (
      <div className="ml-3 border">
        {childrens?.name}
        <div className="border">
          {childrens?.childCategories?.map((item) => (
            <ul key={item.id}>
              <li>
                <ChildCategories
                  onClick={() => handleChoosen(item?.name, item?.id)}
                  childrens={item}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }

  function Category({ category }) {
    return (
      <div>
        <p className="mb-5 text-xl font-medium text-[#1D828E]">
          {category.name}
        </p>
        <div className="ml-3">
          {category.childCategories.length > 0 && (
            <ul>
              {category.childCategories.map((child) => (
                <li
                  key={child.id}
                  className="w-fit cursor-pointer text-sm text-gray-500 hover:underline"
                  onClick={() => handleChoosen(child?.name, child?.id)}
                >
                  <ChildCategories childrens={child} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  const ProductFileUplaod = () => {
    return (
      <>
        <input type="file" onChange={(e) => fielUplaod(e.target.files[0])} />
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
          <div className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%]  z-[302] grid w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#FFFFFF] p-6 py-10 shadow-lg duration-200 sm:rounded-lg md:w-full">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {categories.map((category, index) => (
                <Category key={index} category={category} />
              ))}
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
          {selectCategoryId.map((item, index) => {
            let inputComponent;

            // Qiymat turiga qarab mos komponentni aniqlash
            switch (item.valueTypeDto?.typeName.toLowerCase()) {
              case "string":
                inputComponent = (
                  <input
                    type="text"
                    className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                    placeholder={item.name}
                    value={item.stringValue} // Qiymatni massivdan olish
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedProperties = [...selectCategoryId];
                      updatedProperties[index].stringValue = value;
                      setSelectCategoryId(updatedProperties);
                    }}
                  />
                );
                break;
              case "boolean":
                inputComponent = (
                  <input
                    type="checkbox"
                    className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                    checked={item.booleanValue} // Qiymatni massivdan olish
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const updatedProperties = [...selectCategoryId];
                      updatedProperties[index].booleanValue = checked;
                      setSelectCategoryId(updatedProperties);
                    }}
                  />
                );
                break;
              // Boshqa turdagi qiymatlar uchun kerakli komponentlarni qo'shing
              default:
                inputComponent = (
                  <input
                    type="text"
                    className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
                    placeholder={item.name}
                    value={item.stringValue} // Qiymatni massivdan olish
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedProperties = [...selectCategoryId];
                      updatedProperties[index].stringValue = value;
                      setSelectCategoryId(updatedProperties);
                    }}
                  />
                );
                break;
            }

            // Aniqlangan komponentni qaytarish
            return (
              <div className="mb-10 w-[334px]" key={index}>
                <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
                  {item.name}
                </span>
                {inputComponent}
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
            onClick={() => createProduct(productInitData)}
          >
            E’lonni yuklash
          </button>
        </div>
      </Container>
    </div>
  );
}
