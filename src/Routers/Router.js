import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { VideoDetails } from "../Components/VideoDetails";
import { LikeVideos } from "../Components/LikeVideos";
import { WatchLater } from "../Components/WatchLater/";

import { Playlists } from "../Pages/Playlist";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/video/:id" element={<VideoDetails />}></Route>
        <Route path="/liked-videos" element={<LikeVideos />}></Route>
        <Route path="/watch-later" element={<WatchLater />}></Route>

        <Route path="/playlists" element={<Playlists />}></Route>
      </Routes>
    </>
  );
};
