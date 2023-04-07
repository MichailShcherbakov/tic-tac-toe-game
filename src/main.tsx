import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "~/assets/css/main.css";

import "@fontsource/inter";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);