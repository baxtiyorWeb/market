import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token",
)}`;
const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <App />
        </PrimeReactProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
