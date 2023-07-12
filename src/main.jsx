import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./index.css";

const root = createRoot(document.getElementById("root"));
let ele = "Suraj";
console.log(ele);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
