import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Routers } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>,
  document.getElementById("root")
);
