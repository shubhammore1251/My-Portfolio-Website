import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import "./base.css"; 
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
