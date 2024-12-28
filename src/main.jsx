import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./context/authContext.jsx";
import "./index.css";
import SearchProvider from "./context/searchContext.jsx";
import FilterProvider from "./context/filterProvider.jsx";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token",
)}`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5000,
      retryDelay: 1000,
    },
  },
});
// yuldoshovich@mail.ru
// Aylin1721
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <NextTopLoader height={5} showSpinner={false} color="#1D828E" />
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
