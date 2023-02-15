import React from "react";
import ReactD0M from "react-dom";
import App from "./App";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactD0M.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
