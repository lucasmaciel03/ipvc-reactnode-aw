import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import HeaderProdutos from "./HeaderProdutos";
import classes from "./ProductsList.module.css";
import ProductItem from "./ProductItem";
import FilterTags from "./FilterTags";
import axios from "axios";

const ProductsList = () => {
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 12;
  const [shownProducts, setShownProducts] = useState([]);
  const { filteredProducts } = useContext(FilterContext);
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const url = "http://localhost:4243/api/films/getAllFilmsWithCategoryName";
    const res = await axios.get(url);

    console.log(''+res.data)

    if (!res) return;
    setFilms(res.data);
  };

  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {
    const indexPreviousPage = itemsPerPage * (currPage - 1);
    const indexCurrPage = itemsPerPage * currPage;
    setShownProducts(filteredProducts.slice(indexPreviousPage, indexCurrPage));
  }, [currPage, filteredProducts]);

  useEffect(() => {
    setCurrPage(1);
  }, [filteredProducts]);

  const productsList = shownProducts.map((film) => (
    <ProductItem
      key={film.id}
      name={film.name}
      price={film.price}
      img={film.img}
      description={film.description}
    />
  ));

  return (
    <>
      <section className={classes.products}>
        <HeaderProdutos
          products={filteredProducts}
          itemsPerPage={itemsPerPage}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
        <FilterTags />
        {shownProducts.length ? (
          <>
              <ul className={classes.productsList}>{productsList}</ul>
          </>
        ) : (
          <p className={classes.error}>
            Ops, não foi encontrado nenhum resultado para a sua pesquisa.
          </p>
        )}
      </section>
    </>

  );
};

export default ProductsList;
