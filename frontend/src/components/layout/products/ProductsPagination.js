import React, { useEffect, useState } from "react";
import classes from "./ProductsPagination.module.css";
import { ReactComponent as ArrowLeft } from "../../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right.svg";
import axios from "axios";

const ProductsPagination = ({
  itemsPerPage,
  currPage,
  setCurrPage,
}) => {
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

  const pages = [];
  const totalPages = Math.ceil(films.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClickNumber = (e) => {
    setCurrPage(e.currentTarget.innerText);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClickPage = (pageValue) => {
    if (pageValue < 1) {
      return;
    }
    if (pageValue > +totalPages) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrPage(pageValue);
  };

  return (
    <>
      {pages.length > 1 && (
        <nav className={classes.nav}>
          <button
            onClick={() => handleClickPage(+currPage - 1)}
            title="página anterior"
          >
            <ArrowLeft />
          </button>
          {pages.map((pag) => (
            <button
              key={pag}
              onClick={handleClickNumber}
              className={`${classes.pagNumber} ${
                +pag === +currPage ? classes.currPage : ""
              }`}
            >
              {pag}
            </button>
          ))}
          <button
            onClick={() => handleClickPage(+currPage + 1)}
            title="próxima página"
          >
            <ArrowRight />
          </button>
        </nav>
      )}
    </>
  );
};

export default ProductsPagination;
