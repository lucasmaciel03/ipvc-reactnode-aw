import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Admin from './components/Admin/Dashboard/Dashboard.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Admin />
    </Router>
  </React.StrictMode>
);

