import Header from "./components/layout/Header";
import Products from "./components/layout/products/Products";
import Cart from "./components/cart/Cart";
import React, { useContext, useState } from "react";
import PurchaseSuccess from "./components/cart/finishedPurchase/PurchaseSuccess";
import { ColorModeContext } from "./context/ColorModeContext";
import "./App.css";
import Alert from "./components/alert/Alert";
import { AlertContext } from "./context/AlertContext";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Route, Routes } from "react-router-dom";


function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [purchaseFinishedModal, setPurchaseFinishedModal] = useState(false);
  const { isDarkMode } = useContext(ColorModeContext);
  const { alertIsShown, alertContent } = useContext(AlertContext);

  const closeCartHandler = () => {
    setIsCartVisible(false);
  };
  const showCartHandler = () => {
    setIsCartVisible(true);
  };
  const closeFinalModalHandler = () => {
    setPurchaseFinishedModal(false);
  };
  const showFinalModalHandler = () => {
    setPurchaseFinishedModal(true);
  };
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
             <div className={`app ${isDarkMode ? "darkMode" : ""}`}>
                <Alert alertIsShown={alertIsShown} content={alertContent} />
                {isCartVisible && (
                  <Cart
                    onClose={closeCartHandler}
                    onShowFinal={showFinalModalHandler}
                  />
                )}
                {purchaseFinishedModal && (
                  <PurchaseSuccess onClose={closeFinalModalHandler} />
                )}
                <Header onShow={showCartHandler} />
                <Products />
            </div>
        } >
        </Route>
    </Routes>
);

}

export default App;
