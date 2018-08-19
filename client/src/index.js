import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PageTemplate from './pages'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<PageTemplate />, document.getElementById("root"));
registerServiceWorker();
