import create from "zustand";
import { toast } from "react-toastify";
import api from "../config/api/api";

const useAuthStore = create((set) => ({
  error: "",
  loginAction: async (data) => {
    try {
      const response = await api.post("/authority/sign-in", data);
      const res = response.data;

      if (res.data) {
        const token = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        window.location.href = "/profile/dashboard?tab=1";
      } else {
        set({ error: res.errorResponse });
        throw new Error(res.message);
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.errorResponse?.message || err.message;
      set({ error: errorMessage });
      toast.error(errorMessage);
    }
  }
}));

export default useAuthStore;
