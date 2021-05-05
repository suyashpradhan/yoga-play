import React from "react";
import { useVideoContext } from "../../Context";
import { Sidebar } from "../Sidebar";

export const Playlist = () => {
  const {
    state: { playlists },
  } = useVideoContext();

  console.log(playlists);

  return (
    <>
      <div className="pageLayout">
        <Sidebar />
      </div>
    </>
  );
};
