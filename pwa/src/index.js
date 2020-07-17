import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "leaflet/dist/leaflet.css"; //Imported Leaflet CSS

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
