import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // si tu veux ajouter du style global

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
