import React from "react";
import { useVideoContext } from "../../context";
import { getVideoDetails } from "../../utils";
import Delete from "../../assets/images/delete-white.svg";
import { Link } from "react-router-dom";
import { toggleWatchLaterVideos } from "../../services";

export const WatchLaterCard = ({ id }) => {
  const {
    state: { videos },
    dispatch,
  } = useVideoContext();

  const { title, channelName, duration, thumbnailUrl } = getVideoDetails(
    videos,
    id
  );

  return (
    <div className="horizontalCard" key={id}>
      <div className="leftWrapper">
        <img src={thumbnailUrl} className="cardBannerImage" alt={title}></img>
        <h2 className="videoTiming">{duration}</h2>
      </div>

      <div className="middleWrapper">
        <div>
          <h1 className="videoTitle">{title}</h1>
          <h1 className="channelName">{channelName}</h1>
        </div>
      </div>
      <div className="rightWrapper">
        <img
          src={Delete}
          className="actionIcons"
          alt="delete"
          onClick={() => {
            toggleWatchLaterVideos(id, dispatch);
          }}
        ></img>
      </div>
    </div>
  );
};
