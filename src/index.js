import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const domRootElement = document.getElementById("root");
const reactDomElement = ReactDOM.createRoot(domRootElement);

reactDomElement.render(
  
    <App />
  
);