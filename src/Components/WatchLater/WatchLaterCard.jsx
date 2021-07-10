import React from "react";
import { useVideoContext } from "../../Context";
import { getVideoDetails } from "../../Utils";
import Delete from "../../Assets/images/delete-white.svg";
import { Link } from "react-router-dom";

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
    <div className="horizontalCard">
      <div className="leftWrapper">
        <img src={thumbnailUrl} className="cardBannerImage" alt={title}></img>
        <h2 className="videoTiming">{duration}</h2>
      </div>

      <div className="middleWrapper">
        <Link
          to={{
            pathname: `/video/${id}`,
          }}
          key={id}
        >
          <h1 className="videoTitle">{title}</h1>
          <h1 className="channelName">{channelName}</h1>
        </Link>
      </div>
      <div className="rightWrapper">
        <img
          src={Delete}
          className="actionIcons"
          alt="delete"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: id })
          }
        ></img>
      </div>
    </div>
  );
};
