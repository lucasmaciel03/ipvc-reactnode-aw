import React, { useContext, useRef, useState, useEffect } from "react";
import { AlertContext } from "../../../context/AlertContext";
import { CartContext } from "../../../context/CartContext";
import classes from "./ProductItem.module.css";
import { ReactComponent as IconHeart } from "../../../assets/heart.svg";
import { ReactComponent as IconFilled } from "../../../assets/heartfilled.svg";
import axios from "axios";


const ProdutoItem = (  ) => {
  const [amount, setAmount] = useState(1);
  const animaTimeout = useRef();

  const { addItem } = useContext(CartContext);
  const { showAlert } = useContext(AlertContext);

  const [films, setFilms] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFilms = async () => {
    const url = "http://localhost:4243/api/films/getAllFilmsWithCategoryName";
    const res = await axios.get(url);

    console.log(res.data)

    if (!res) return;
    setFilms(res.data);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (!isLoaded){
      getFilms();
      setIsLoaded(true);
    }
  }, [isLoaded]);


  const addItemToCartHandler = (e) => {
    e.preventDefault();

    clearTimeout(animaTimeout.current);

    addItem({
      name: films.name,
      price: films.price,
      amount: +amount,
      img: films.img,
    });

    showAlert(`"${films.name}" adicionado(s) ao carrinho`);
  };

  const [isFav, setIsFav] = useState(false);
  const favAdd = (e) => {
    setIsFav(!isFav);
    e.preventDefault();
    clearTimeout(animaTimeout.current);
    if (isFav) {
      setIsFav(false);
      showAlert(`"${films.name}" foi removido dos favoritos`);
    } else {
      setIsFav(true);
      showAlert(`"${films.name}" adicionado aos favoritos`);
    }
  };

  return (
    <>
      {films.map((film) => {
        return (
          <li className={classes.card}>
            <div className={classes.imgContainer}>
              <img src={require(`../../../assets/imgs-produtos/${film.img}`)} alt={film.name} />
            </div>
            <div className={classes.infos}>
              <div>
                <p className={classes.name}>{film.name}</p>
                <p className={classes.description} title={film.description}>
                  {film.description}
                </p>
              </div>

              <div className={classes.flex}>
                <p className={classes.price}>€ {film.price}</p>
                <form className={classes.addForm}>
                  <button
                    className={classes.favAdd}
                    onClick={favAdd}
                    title="adicionar aos favoritos"
                  >
                    {isFav ? <IconFilled /> : <IconHeart />}
                  </button>
                  <button
                    className={classes.btnAdd}
                    onClick={addItemToCartHandler}
                    title="adicionar ao carrinho"
                  >
                    +
                  </button>
                </form>
              </div>
            </div>
          </li>
        )
      })}

    </>
  );
};

export default ProdutoItem;
