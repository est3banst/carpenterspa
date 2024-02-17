import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { 
 BrowserRouter as Router, Route
 } from 'react-router-dom';
import Articles from './componentes/Articles.jsx';
import Works from './componentes/Works.jsx';
import Contact from './componentes/Contact.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
