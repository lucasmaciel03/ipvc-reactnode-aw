import React from 'react';
import './ContainerError.css';

const ContainerError = ({children}) => {
  return (
    <div className="Container-Error">
      {children}
    </div>
  );
}
 
export default ContainerError;