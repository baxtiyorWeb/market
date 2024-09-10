import { configureStore } from '@reduxjs/toolkit';
import createProductSlice from '../slices/createProductSlice';// Product slice-ni import qiling

const store = configureStore({
  reducer: {
    product: createProductSlice,
    // boshqa slice-larni ham qo'shing
  },
});

export default store;
