import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { VideoDetails } from "../Pages/VideoDetails";
import { WatchLater } from "../Pages/WatchLater";
import { Playlists } from "../Pages/Playlist";
import { Login } from "../Pages/Login/";
import { Favourites } from "../Pages/favourites";
import { PrivateRoutes } from "./private-routes";
import { Register } from "../Pages/register";
import { WatchHistory } from "../Pages/watch-history";

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
