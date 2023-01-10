import React from "react";
import Filter from "../../filter/Filter";
import classes from "./Products.module.css";
import ProductsList from "./ProductsList";

const Products = () => {
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
