import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterContextProvider from "./Client/context/FilterContext";
import CartContextProvider from "./Client/context/CartContext";
import ColorModeContextProvider from "./Client/context/ColorModeContext";
import AlertContextProvider from "./Client/context/AlertContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartContextProvider>
        <ColorModeContextProvider>
          <AlertContextProvider>

            <App />
          </AlertContextProvider>
        </ColorModeContextProvider>
      </CartContextProvider>
    </FilterContextProvider>

  </React.StrictMode>
);
