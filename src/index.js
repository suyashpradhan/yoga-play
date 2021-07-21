import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoContextProvider, AuthContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <VideoContextProvider>
          <App />
        </VideoContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
