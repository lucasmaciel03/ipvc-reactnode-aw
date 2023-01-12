import Header from "./components/layout/Header";
import Products from "./components/layout/products/Products";
import Cart from "./components/cart/Cart";
import React, { useContext, useState, useEffect } from "react";
import PurchaseSuccess from "./components/cart/finishedPurchase/PurchaseSuccess";
import { ColorModeContext } from "./context/ColorModeContext";
import "./App.css";
import Alert from "./components/alert/Alert";
import { AlertContext } from "./context/AlertContext";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ErrorPage from './Error/Error404';


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

  useEffect(() => {
    const hasToken = localStorage.getItem("token");
    if (hasToken) {
      const info = jwtDecode(hasToken);

      // setUserType(info.type);
      // console.log(info.idUser);
    }
  }, []);
  return (
    
    <Routes>
        <Route path="*" element={<ErrorPage/>}/>
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
