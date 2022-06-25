import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./script/script.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} 
      dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
};
renderTree(store.getState());
store.subscribe(renderTree);

reportWebVitals();