import React from 'react';
import Header from '../HeaderError/HeaderError';
import Container from '../ContainerError.js/ContainerError';

const NotFoundLayout = ({children}) => {
  return ( 
    <div className="App">
      <Container>
        <Header/>
        {children}
      </Container>
    </div>
  );
}
 
export default NotFoundLayout;