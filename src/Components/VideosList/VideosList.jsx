import React, { useState } from "react";
import "./VideosList.css";
import { useVideoContext } from "../../Context";
import { useEffect } from "react";
import axios from "axios";
import { VideoCard } from "../VideoCard/VideoCard";
import { getFilteredVideo } from "../../Utils/utils";
import NoVideo from "../../Assets/images/no_videos.svg";
import Loader from "react-loader-spinner";

export const VideosList = () => {
  const [loader, setLoader] = useState(false);
  const {
    state: { videos, searchedText,toggleSidebar },
    dispatch,
  } = useVideoContext();

  const filteredVideos = getFilteredVideo(videos, searchedText);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          dispatch({ type: "ALL_VIDEOS", payload: response.data.videos });
        }
        setLoader(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return loader ? (
    <div className="loaderRow">
      <Loader type="Oval" color="#0c6ff9" height={80} width={80} />
    </div>
  ) : (
    <main className={toggleSidebar ? "main":"main mainToggled"}>
    <div className="mainContent">
      <h1 className="pageHeader">All Videos</h1>
      {filteredVideos.length === 0 ? (
        <>
          <img src={NoVideo} alt="empty" className="errorImage"></img>
          <h2 className="errorText">No Such Video</h2>
        </>
      ) : (
        <div className="cardRow">
          {filteredVideos.map(({ id }) => (
            <VideoCard key={id} videoId={id} />
          ))}
        </div>
      )}
      </div>
    </main>
  );
};