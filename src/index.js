import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BasketProvider } from "./hooks/basketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <BasketProvider>
        <App />
        </BasketProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
