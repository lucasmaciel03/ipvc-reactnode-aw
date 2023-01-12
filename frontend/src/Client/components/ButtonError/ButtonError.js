import React from 'react';
import './ButtonError.css';
import {Link} from "react-router-dom";

const ButtonError = ({children}) => {
  return ( 
      <Link to="/">
        <div className="Button-Error">
          {children}
        </div>
      </Link>
  );
}
 
export default ButtonError;