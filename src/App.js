import "./Assets/styles/base.css";
import { PageRoutes } from "./Routers";
import { Header } from "./Components/Header";
import { ToastContainer } from "./Components/Toast";
import { useEffect } from "react";
import { useAuth } from "./Context/auth-context";
import axios from "axios";
import { useVideoContext } from "./Context";
import {
  fetchAllVideos,
  fetchFavouriteVideosList,
  fetchUserWatchHistory,
  fetchUserWatchLater,
} from "./ServerRequests";

export const App = () => {
  const {
    userAuthState: { isLoggedIn, userAuthToken },
  } = useAuth();

  const {
    state: { loader },
    dispatch,
  } = useVideoContext();

  useEffect(() => {
    fetchAllVideos(dispatch, loader);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      axios.defaults.headers.common["Authorization"] = userAuthToken;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchFavouriteVideosList(dispatch, loader);
      fetchUserWatchHistory(dispatch, loader);
      fetchUserWatchLater(dispatch, loader);
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
