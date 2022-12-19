import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Admin from './components/Admin/Dashboard/Dashboard.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>
);

