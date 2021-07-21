import React from "react";
import "./VideosList.css";
import { useVideoContext } from "../../context";
import { VideoCard } from "../VideoCard/VideoCard";
import { getFilteredVideo } from "../../utils";
import NoVideo from "../../assets/images/no_videos.svg";
import Loader from "react-loader-spinner";

export const VideosList = () => {
  const {
    state: { videos, searchedText, toggleSidebar, loader },
  } = useVideoContext();

  const filteredVideos = getFilteredVideo(videos, searchedText);

  return loader ? (
    <div className="loaderRow">
      <Loader type="Oval" color="#0c6ff9" height={80} width={80} />
    </div>
  ) : (
    <main className={toggleSidebar ? "main" : "main mainToggled"}>
      <div className="mainContent">
        {filteredVideos.length === 0 ? (
          <>
            <img src={NoVideo} alt="empty" className="errorImage"></img>
            <h2 className="errorText">No Such Video</h2>
          </>
        ) : (
          <div className="cardRow">
            {filteredVideos.map(({ _id }) => (
              <VideoCard key={_id} _id={_id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
