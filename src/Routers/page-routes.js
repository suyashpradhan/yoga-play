import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { VideoDetails } from "../Pages/VideoDetails";
import { WatchLater } from "../Pages/WatchLater";
import { Playlists } from "../Pages/Playlist";
import { Login } from "../Pages/Login/Login";
import { LikedVideos } from "../Pages/LikedVideos";
import { PrivateRoutes } from "./private-routes";

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
          element={<LikedVideos />}
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
          element={<Playlists />}
        ></PrivateRoutes>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Login />}></Route>
      </Routes>
    </>
  );
};
