import React from 'react';
import Button from '../ButtonError/ButtonError';
import ImageScarecrow from '../../assets/Scarecrow.png';
import './NotFound.css';

const NotFound = () => {
    return (
      <div className="Main-Error">
        <div>
          <img className="Img-Error" src={ImageScarecrow} alt=""></img>
        </div>
        <div className="Info-Error">
          <h2>Más Noticías</h2>
          <p>A página que procura não existe ou está temporariamente indisponivel.</p>
          <Button>
            VOLTE AO LOGIN
          </Button>
        </div>
      </div>
    );
  }
   
  export default NotFound;