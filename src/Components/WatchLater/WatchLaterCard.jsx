import React from "react";
import { useVideoContext } from "../../Context";
import { getVideoDetails } from "../../Utils";
import Delete from "../../Assets/images/delete-white.svg";
import { Link } from "react-router-dom";
import { toggleWatchLaterVideos } from "../../ServerRequests";
import { useToastHook } from "../../CustomHook/useToastHook";

export const WatchLaterCard = ({ id }) => {
  const toast = useToastHook(3000);

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
          onClick={() => {
            toggleWatchLaterVideos(id, dispatch);
            toast("error", "Video Removed from Watch Later");
          }}
        ></img>
      </div>
    </div>
  );
};
