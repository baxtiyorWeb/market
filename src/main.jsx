import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import NextTopLoader from "nextjs-toploader";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./context/authContext.jsx";
import "./index.css";
import SearchProvider from "./context/searchContext.jsx";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token",
)}`;

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <NextTopLoader height={5} showSpinner={false} color="#1D828E" />
            <AuthProvider>
              <SearchProvider>
                <App />
              </SearchProvider>
            </AuthProvider>
          </PrimeReactProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
