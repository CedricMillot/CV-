import React from 'react';
import ReactDOM from 'react-dom/client'; // Importez le 'root' de 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Créez une racine avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application avec BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);