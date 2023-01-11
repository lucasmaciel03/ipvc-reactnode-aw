import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterContextProvider from "./context/FilterContext";
import CartContextProvider from "./context/CartContext";
import ColorModeContextProvider from "./context/ColorModeContext";
import AlertContextProvider from "./context/AlertContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <CartContextProvider>
          <ColorModeContextProvider>
            <AlertContextProvider>

              <App />
            </AlertContextProvider>
          </ColorModeContextProvider>
        </CartContextProvider>
      </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
