import "./assets/styles/base.css";
import axios from "axios";
import { useEffect } from "react";
import { PageRoutes } from "./routers";
import { Header } from "./components/Header";
import { useAuth, useVideoContext } from "./context";
import {
  fetchAllVideos,
  fetchFavouriteVideosList,
  fetchUserWatchHistory,
  fetchUserWatchLater,
} from "./services";
import { Toast } from "./components/Toast";

export const App = () => {
  const {
    userAuthState: { isLoggedIn, userAuthToken },
  } = useAuth();

  const {
    state: { toastMessage },
  } = useVideoContext();

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
      fetchUserWatchLater(dispatch, loader);
    }
  }, [isLoggedIn]);

  return (
    <div className="body">
      <Header />
      <PageRoutes />
      <div className="toastWrapper">{toastMessage && <Toast />}</div>
    </div>
  );
};
