import React, { useEffect, useState } from "react";
import Filter from "../../filter/Filter";
import classes from "./Products.module.css";
import ProductsList from "./ProductsList";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [info, setUserInfo] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const hasToken = localStorage.getItem("token");
    if (hasToken) {
      const info = jwtDecode(hasToken);
      setUserInfo(info);
      // console.log(info.idUser);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <main className={classes.main}>
        <p className={classes.navCatalogo}>Home / Filmes</p>
        <Filter />
        <ProductsList />
      </main>
    </div>
  );
};

export default Products;
