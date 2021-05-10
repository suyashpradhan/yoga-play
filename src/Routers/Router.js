import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { VideoDetails } from "../Pages/VideoDetails";
import { WatchLater } from "../Pages/WatchLater";
import { Playlists } from "../Pages/Playlist";
import { Login } from "../Pages/Login/Login";
import { LikedVideos } from "../Pages/LikedVideos";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/video/:id" element={<VideoDetails />}></Route>
        <Route path="/liked-videos" element={<LikedVideos />}></Route>
        <Route path="/watch-later" element={<WatchLater />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
