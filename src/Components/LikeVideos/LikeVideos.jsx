import React, { useState } from "react";
import { useVideoContext } from "../../Context";
import { LikedVideoCard } from "./LikedVideoCard";
import { Sidebar } from "../Sidebar";
import "./LikeVideos.css";

export const LikeVideos = () => {
  const {
    state: { likeVideos },
  } = useVideoContext();

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <h1 className="pageHeader">Liked Videos</h1>

          {likeVideos.length === 0
            ? ""
            : likeVideos.map((id) => <LikedVideoCard key={id} videoId={id} />)}
        </div>
      </main>
    </>
  );
};
