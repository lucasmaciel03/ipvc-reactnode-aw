import React, { useContext, useRef, useState } from "react";
import { AlertContext } from "../../../context/AlertContext";
import { CartContext } from "../../../context/CartContext";
import classes from "./ProductItem.module.css";
import { ReactComponent as IconHeart } from "../../../assets/heart.svg";

const ProdutoItem = ({ name, img, price, description }) => {
  const [amount, setAmount] = useState(1);
  const animaTimeout = useRef();

  const { addItem } = useContext(CartContext);
  const { showAlert } = useContext(AlertContext);

  const addItemToCartHandler = (e) => {
    e.preventDefault();

    clearTimeout(animaTimeout.current);

    addItem({
      name: name,
      price: price,
      amount: +amount,
      img: img,
    });

    showAlert(`"${name}" adicionado(s) ao carrinho`);
  };

  const favAdd = (e) => {
    e.preventDefault();
    clearTimeout(animaTimeout.current);
    showAlert(`"${name}" adicionado aos favoritos`);
  };

  return (
    <li className={classes.card}>
      <div className={classes.imgContainer}>
        <img src={require(`../../../assets/imgs-produtos/${img}`)} alt={name} />
      </div>
      <div className={classes.infos}>
        <div>
          <p className={classes.name}>{name}</p>
          <p className={classes.description} title={description}>
            {description}
          </p>
        </div>

        <div className={classes.flex}>
          <p className={classes.price}>€ {price}</p>
          <form className={classes.addForm}>
            <button
              className={classes.favAdd}
              onClick={favAdd}
              title="adicionar aos favoritos"
            >
              <IconHeart />
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
  );
};

export default ProdutoItem;
