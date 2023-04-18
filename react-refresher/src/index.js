import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./store/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </BrowserRouter>
);
