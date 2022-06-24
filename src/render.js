import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import state from "./script/script.js";
import { setPost } from "./script/script.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} setPost={setPost} />
    </React.StrictMode>
  );
};
reportWebVitals();