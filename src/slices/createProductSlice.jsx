// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    previewOpen: false,
    previewImage: "",
    propertiesData: [],
    selltype: [],
    paymenttype: [],
    fileList: [],
    fileLisId: [],
    fileSaveId: [],
    currency: [],
    currencyId: [],
    queryName: "",
    queryId: "",
    isLoading: false,
    isUpload: false,
    productInitData: {
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
    },
    nextProductData: [{}],
  },
  reducers: {
    setPreviewOpen: (state, action) => {
      state.previewOpen = action.payload;
    },
    setPreviewImage: (state, action) => {
      state.previewImage = action.payload;
    },
    setPropertiesData: (state, action) => {
      state.propertiesData = action.payload;
    },
    setSellType: (state, action) => {
      state.selltype = action.payload;
    },
    setPaymentType: (state, action) => {
      state.paymenttype = action.payload;
    },
    setFileList: (state, action) => {
      state.fileList = action.payload;
    },
    setFileLisId: (state, action) => {
      state.fileLisId = action.payload;
    },
    setFileSaveId: (state, action) => {
      state.fileSaveId = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setCurrencyId: (state, action) => {
      state.currencyId = action.payload;
    },
    setQueryName: (state, action) => {
      state.queryName = action.payload;
    },
    setQueryId: (state, action) => {
      state.queryId = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsUpload: (state, action) => {
      state.isUpload = action.payload;
    },
    setProductInitData: (state, action) => {
      state.productInitData = action.payload;
    },
    setNextProductData: (state, action) => {
      state.nextProductData = action.payload;
    },
    removeFileListID: (state, action) => {
      state.fileLisId = state.fileLisId.filter(item => item.fileItemId !== action.payload);
    },
   
  },
});

export const {
  setPreviewOpen,
  setPreviewImage,
  setPropertiesData,
  setSellType,
  setPaymentType,
  setFileList,
  setFileLisId,
  setFileSaveId,
  setCurrency,
  setCurrencyId,
  setQueryName,
  setQueryId,
  setIsLoading,
  setIsUpload,
  setProductInitData,
  setNextProductData,
  removeFileListID,
} = productSlice.actions;

export default productSlice.reducer;
