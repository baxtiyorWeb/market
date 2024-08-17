import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Select, Spin, Switch, Upload } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import CategoryTab from "../../components/categoryTab/CategoryTab";
import useCreateProduct from "../../hooks/useCreateProduct";
import AddProductLocation from "../../layout/addProductLocation";
import Container from "../../shared/Container";

export default function AddProductCategory() {
  const {
    currency,
    isLoading,
    isUpload,
    isOpen,
    paymenttype,
    previewImage,
    previewOpen,
    nextProductData,
    productInitData,
    propertiesData,
    queryName,
    selltype,
    regionId,
    fileList,
    setNextProductData,
    setProductInitData,
    handleSubmit,
    handleChange,
    handleChoosen,
    handlePreview,
    removeFileListID,
    setCurrencyId,
    setDistrictId,
    setRegionId,
    uploadImage,
    handleImageUpload,
  } = useCreateProduct();
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
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
                  setProductInitData({
                    ...productInitData,
                    paymentTypeId: e,
                  })
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
          <div className="grid  grid-cols-3 gap-1 sm:grid sm:w-full sm:grid-cols-2 md:grid md:grid-cols-1  lg:grid lg:grid-cols-2 lg:gap-5 xs:grid xs:grid-cols-1 xs:justify-items-center xs:gap-1 2xs:grid 2xs:grid-cols-1 ">
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
                        (item?.valueTypeDto?.typeName === "STRING" && "text") ||
                        (item?.valueTypeDto?.typeName === "DOUBLE" && "number")
                      }
                      required
                      className="focus:border-[1px_solid_rgb(59 130 246)] sm_res:w-[70%] mt-2 h-[50px] w-[100%] shrink-0 rounded-[5px] border  border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none md:w-[80%] xs:m-auto  xs:w-[100%]  2xs:w-[80%]"
                      placeholder={item.name}
                      value={
                        nextProductData[index]?.stringValue ||
                        nextProductData[index]?.intValue ||
                        nextProductData[index]?.booleanValue ||
                        nextProductData[index]?.doubleValue ||
                        nextProductData[index]?.dateValue ||
                        ""
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        let stringValue =
                          nextProductData[index]?.stringValue || "";
                        let intValue = nextProductData[index]?.intValue || "";
                        let doubleValue =
                          nextProductData[index]?.doubleValue || "";

                        // Property's value type detection
                        const valueType = item?.valueTypeDto?.typeName;

                        // Set values based on value type
                        if (valueType === "INTEGER") {
                          intValue = value;
                        } else if (valueType === "STRING") {
                          stringValue = value;
                        } else if (valueType === "DOUBLE") {
                          doubleValue = value;
                        }

                        const updatedData = [...nextProductData]; // Copy the array
                        updatedData[index] = {
                          ...updatedData[index],
                          id: 0,
                          propertyId: item.id,
                          valueTypeId: item?.valueTypeDto?.id || 3,
                          stringValue,
                          intValue,
                          doubleValue,
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

            <div className=" flex h-full w-auto flex-col items-center justify-center">
              {" "}
              <div className="mx-10 mb-10 w-auto">
                {" "}
                <span className="text block font-poppins text-[14px] font-normal leading-[22px] text-black">
                  {" "}
                  valyutani tanlang{" "}
                </span>{" "}
                <Select
                  onChange={(e) => setCurrencyId(e.target.id)}
                  className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border-[#E2E2E2] bg-[#FAFAFA]  font-poppins text-[16px] outline-none "
                  placeholder="valyutani tanlang"
                  required
                >
                  {" "}
                  {currency?.map((item, index) => (
                    <Select.Option key={index}>{item?.shortName}</Select.Option>
                  ))}{" "}
                </Select>{" "}
              </div>{" "}
            </div>
          </div>
          <span className="text mx-10 block font-poppins text-[14px] font-normal leading-[22px] text-black">
            rasm kiriting
          </span>
          <div className="my-3 flex items-center justify-start">
            <div className="mb-10">
              {isUpload ? (
                <Spin indicator={<LoadingOutlined />} />
              ) : (
                <Upload
                  listType="picture-card"
                  customRequest={uploadImage}
                  fileList={fileList}
                  onRemove={removeFileListID}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
              )}
              {previewImage && (
                <Image
                  wrapperStyle={{
                    display: "none",
                  }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
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
              {isLoading ? <Spin /> : "  E’lonni yuklash"}
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
