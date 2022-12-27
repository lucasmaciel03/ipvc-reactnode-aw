import React from "react";
import "./card.css";
import star100white from "../../../images/star100white.png";
import star100cor from "../../../images/start100cor.png";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="cardImage">
        <img src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>

      <div className="card-content">
        <div className="cardTitle">
          <h3>Title</h3>
        </div>
        <div className="cardDescription">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, quia earum?quia earum?quia earum?quia earum? earum?
            earum?earum?earum?earum?earum?earum?earum?earum?earum?
          </p>
        </div>
      </div>

      <div className="btn">
        <button>
          <a>Alugar</a>
        </button>
        <div className="fav">
          <a href="#">
            <img src={star100white}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
