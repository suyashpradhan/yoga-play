import "./VideoCard.css";
import View from "../../Assets/images/view.svg";
import WatchLater from "../../Assets/images/watch_later.svg";
import Checked from "../../Assets/images/check.svg";
import { useVideoContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { getVideoDetails, videoExists } from "../../Utils/utils";
import { useToastHook } from "../../CustomHook/useToastHook";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";

export const VideoCard = ({ _id }) => {
  const navigate = useNavigate();
  const toast = useToastHook(3000);

  const {
    state: { videos, watchLater },
    dispatch,
  } = useVideoContext();

  const {
    videoId,
    thumbnailUrl,
    duration,
    channelImageUrl,
    channelName,
    title,
    publishedDate,
    statistics: { viewsCount },
  } = getVideoDetails(videos, _id);

  return (
    <div className="card">
      <div
        className="cardInner"
        onClick={() => {
          navigate(`/video/${_id}`);
        }}
      >
        <div className="cardHeader">
          <img className="cardImage" src={thumbnailUrl} alt="cardImage" />
        </div>

        <h4 className="videoDuration">{duration}</h4>

        <div className="cardBody">
          <img
            className="channelImageUrl"
            src={channelImageUrl}
            alt="any"
          ></img>
          <h3 className="channelName">{channelName}</h3>
          <h1 className="videoTitle">{title}</h1>
          <img src={View} alt="view" className="cardIcon" />
          <h4 className="totalViews">{viewsCount} views</h4>
          <h5 className="publishedDate"> • {publishedDate}</h5>
        </div>
      </div>
      <AddToPlaylist videoId={videoId} />
      {videoExists(watchLater, videoId) ? (
        <img
          src={Checked}
          title="Added to watch later"
          alt="watch_later"
          className="cardHeaderIcon watchLaterIcon"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: _id });
            toast("error", "Video Removed from Watch Later");
          }}
        ></img>
      ) : (
        <img
          src={WatchLater}
          title="Added to watch later"
          alt="watch_later"
          className="cardHeaderIcon watchLaterIcon"
          onClick={() => {
            dispatch({ type: "ADD_TO_WATCH_LATER", payload: _id });
            toast("success", "Video Added to Watch Later");
          }}
        ></img>
      )}
    </div>
  );
};
