import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { setPost, updateNewPost, subscribe } from "./script/script.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} setPost={setPost} updateNewPost={updateNewPost}/>
    </React.StrictMode>
  );
};
renderTree(state);
subscribe(renderTree);

reportWebVitals();