import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token",
)}`;

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
