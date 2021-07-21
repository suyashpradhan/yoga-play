import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { VideoDetails } from "../pages/VideoDetails";
import { WatchLater } from "../pages/WatchLater";
import { Playlists } from "../pages/Playlist";
import { Login } from "../pages/Login/";
import { Favourites } from "../pages/favourites";
import { PrivateRoutes } from "./private-routes";
import { Register } from "../pages/register";
import { WatchHistory } from "../pages/watch-history";

export const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/video/:id" element={<VideoDetails />}></Route>
        <PrivateRoutes
          exact
          path="/liked-videos"
          element={<Favourites />}
        ></PrivateRoutes>
        <PrivateRoutes
          exact
          path="/watch-later"
          element={<WatchLater />}
        ></PrivateRoutes>
        <PrivateRoutes
          exact
          path="/playlists"
          element={<Playlists />}
        ></PrivateRoutes>
        <PrivateRoutes
          exact
          path="/history"
          element={<WatchHistory />}
        ></PrivateRoutes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};
