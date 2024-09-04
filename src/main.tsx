import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
