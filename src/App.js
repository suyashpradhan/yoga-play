import "./Assets/styles/base.css";
import { PageRoutes } from "./Routers";
import { Header } from "./Components/Header";
import { ToastContainer } from "./Components/Toast";
import { useEffect } from "react";
import { useAuth } from "./Context/auth-context";
import axios from "axios";

export const App = () => {
  const {
    userAuthState: { isLoggedIn, userAuthToken },
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      axios.defaults.headers.common["Authorization"] = userAuthToken;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [isLoggedIn]);

  return (
    <div className="body">
      <Header />
      <PageRoutes />
      <ToastContainer />
    </div>
  );
};
