import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
// import {CounterApp} from "./components/counter/CounterApp";
// import { PokemonApp } from "./components/PokemonApp/PokemonApp";
import { ToDoApp } from "./components/ToDoApp/ToDoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      {/* <PokemonApp /> */}
      <ToDoApp />
    </Provider>
  </React.StrictMode>
);
