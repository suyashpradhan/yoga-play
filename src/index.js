import React from "react";
import ReactDOM from "react-dom";
import { VideoContextProvider, ToastContextProvider } from "./Context";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastContextProvider>
          <VideoContextProvider>
            <App />
          </VideoContextProvider>
        </ToastContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
