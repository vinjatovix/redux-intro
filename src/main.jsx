import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { PokemonApp } from "./PokemonApp";
// import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
