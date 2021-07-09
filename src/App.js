import "./Assets/styles/base.css";
import { PageRoutes } from "./Routers";
import { Header } from "./Components/Header";
import { ToastContainer } from "./Components/Toast";
import { useEffect } from "react";
import { useAuth } from "./Context/auth-context";
import axios from "axios";
import { useVideoContext } from "./Context";
import { fetchFavouriteVideosList } from "./ServerRequests";

export const App = () => {
  const {
    userAuthState: { isLoggedIn, userAuthToken },
  } = useAuth();
  const { dispatch } = useVideoContext();

  useEffect(() => {
    if (isLoggedIn) {
      axios.defaults.headers.common["Authorization"] = userAuthToken;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchFavouriteVideosList(dispatch);
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
