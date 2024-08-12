import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../config/api/api";
import { getCategoryPropertiesById, uploadFile } from "../exports/api";
import useToggle from "./useToggle";

const useCreateProduct = () => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.result;
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [params, setParams] = useSearchParams();
  const [regionId, setRegionId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileLisId, setFileListId] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [selltype, setSellType] = useState([]);
  const [paymenttype, setPaymentType] = useState([]);
  const [fileSaveId, setFileSaveId] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [currencyId, setCurrencyId] = useState([]);
  const [queryName, setQueryName] = useState(params.get("categoryName") || "");
  const [queryId, setQueryId] = useState(params.get("categoryId") || "");
  const [isLoading, setisLoading] = useState(false);
  const [isUpload, setisUpload] = useState(false);
  const [productInitData, setProductInitData] = useState({
    name: "",
    price: "",
    canAgree: "",
    regionId: "",
    description: "",
    categoryId: "",
    districtId: "",
    address: "",
    sellTypeId: "",
    paymentTypeId: "",
    propertyValues: "",
    files: "",
  });

  const [nextProductData, setNextProductData] = useState([{}]);
  const { isOpen } = useToggle();
  nextProductData;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
      const res = await getCategoryPropertiesById(id);
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

  const uploadImage = async (options) => {
    const { onSuccess, onError, file } = options;
    const imgFile = new FormData();
    imgFile.append("img", file);
    const imgList = new FileReader();
    imgList.readAsDataURL(file);
    setisUpload(true);
    try {
      const data = uploadFile(file);
      data.then((res) => {
        // Fayl id (identifikatorini) olish
        const fileId = res?.data?.id;

        // fileList ni yangilash
        setFileListId((prevFileList) => [
          ...prevFileList,
          {
            id: fileId, // Hozirgi faylning indeksi
            fileItemId: fileId, // Fayl identifikatori
            mainFile: prevFileList.length === 0, // Agar bu birinchi fayl bo'lsa
          },
        ]);

        setFileSaveId((prev) => [
          ...prev,
          {
            id: res?.data?.id,
          },
        ]);
      });
      onSuccess("Ok");
    } catch (err) {
      "Eroor: ", err;
      onError({ err });
    } finally {
      setisUpload(false);
    }
  };

  const nullableValues = {
    price: productInitData.price != "",
    region: productInitData.regionId != "",
    district: productInitData.districtId != "",
    address: productInitData.address != "",
    selltype: productInitData.sellTypeId != "",
    paymenttype: productInitData.paymentTypeId !== "",
    files: productInitData.files != "",
  };
  if (Object.values(nullableValues) !== "") {
    const checkGap = Object.values(nullableValues).map((item) =>
      item ? "kiritildi" : "kiritilmadi",
    );

    const checkGaps = Object.keys(nullableValues).map((item) => item);

    // createProduct({
    //   ...productInitData,
    //   regionId: regionId,
    //   categoryId: queryId,
    //   canAgree: productInitData.canAgree ? true : false,
    //   districtId: districtId,
    //   propertyValues: nextProductData,
    //   files: fileLisId, // `fileList` yuborgan fayllar ro'yxati
    // });

    // // State yangilanadi
    // setProductInitData({
    //   ...productInitData,
    //   propertyValues: nextProductData,
    //   files: fileList, // `fileList` yuborgan fayllar ro'yxati
    // });
  } else {
    console.log(nullableValues);
  }
  const handleSubmit = async (e) => {
    // Category tanlanganini olish
    e.preventDefault();

    try {
    } catch (error) {
      error?.message;
    }
  };

  const removeFileListID = (file) => {
    const fileIdToRemove = file.id; // O'chirilishi kerak bo'lgan faylning identifikatorini olish
    setFileListId((prev) =>
      prev?.filter((item) => item?.fileItemId !== fileIdToRemove),
    );
  };
  useEffect(() => {
    getSellType();
    getPaymenType();
  }, []);
  return {
    previewOpen,
    previewImage,
    propertiesData,
    selltype,
    currency,
    regionId,
    fileLisId,
    fileList,
    productInitData,
    paymenttype,
    currencyId,
    nextProductData,
    queryId,
    queryName,
    isLoading,
    isUpload,
    isOpen,
    setCurrency,
    setDistrictId,
    setCurrencyId,
    setRegionId,
    setNextProductData,
    setProductInitData,
    removeFileListID,
    handlePreview,
    handleChange,
    handleChoosen,
    uploadImage,
    handleSubmit,
  };
};

export default useCreateProduct;
