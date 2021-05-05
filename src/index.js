import React from "react";
import ReactDOM from "react-dom";
import { VideoContextProvider, ToastContextProvider } from "./Context";
import { App } from "./App";
import { mockServer } from "./Server/mock.server";
import { BrowserRouter as Router } from "react-router-dom";

mockServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastContextProvider>
        <VideoContextProvider>
          <App />
        </VideoContextProvider>
      </ToastContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
