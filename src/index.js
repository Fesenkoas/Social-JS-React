import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./script/redux_store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderTree = () => {
  root.render(
   // <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
   // </React.StrictMode>
  );
};
renderTree();
store.subscribe(() => renderTree());

reportWebVitals();