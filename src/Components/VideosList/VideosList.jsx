import React from "react";
import "./VideosList.css";
import { useVideoContext } from "../../Context";
import { useEffect } from "react";
import axios from "axios";
import { VideoCard } from "../VideoCard/VideoCard";
import { getFilteredVideo } from "../../Utils/utils";
import NoVideo from "../../Assets/images/no_videos.svg";
import Loader from "react-loader-spinner";
import { fetchAllVideos } from "../../API";

export const VideosList = () => {
  const {
    state: { videos, searchedText, toggleSidebar, loader },
    dispatch,
  } = useVideoContext();

  const filteredVideos = getFilteredVideo(videos, searchedText);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "SET_LOADER", payload: loader });
        const response = await axios.get(fetchAllVideos);
        if (response.status === 200) {
          dispatch({
            type: "ALL_VIDEOS",
            payload: response.data.allVideos,
          });
        }
        dispatch({ type: "SET_LOADER", payload: loader });
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
