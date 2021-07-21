import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  VideoContextProvider,
  AuthContextProvider,
  ToastContextProvider,
} from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <ToastContextProvider>
          <VideoContextProvider>
            <App />
          </VideoContextProvider>
        </ToastContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
