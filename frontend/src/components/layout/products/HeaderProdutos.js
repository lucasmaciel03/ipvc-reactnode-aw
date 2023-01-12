import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./HeaderProdutos.module.css";
import ProductsPagination from "./ProductsPagination";

const HeaderProdutos = ({ products, itemsPerPage, currPage, setCurrPage }) => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const url = "http://localhost:4243/api/films/getAllFilmsWithCategoryName";
    const res = await axios.get(url);

    if (!res) return;
    setFilms(res.data);
  };

  useEffect(() => {
    getFilms();
  }, []);



  const results = (
    <p className={classes.results}>
      Página {currPage} de {Math.ceil(films.length / itemsPerPage)} |{" "}
      {films.length} resultados
    </p>
  );

  return (
    <>
      <div className={classes.divPaginas}>
        <div>{results}</div>
        <ProductsPagination
          products={films}
          itemsPerPage={itemsPerPage}
          setCurrPage={setCurrPage}
          currPage={currPage}
        />
      </div>
    </>
  );
};

export default HeaderProdutos;
