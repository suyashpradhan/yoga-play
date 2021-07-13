import "./VideoCard.css";
import View from "../../Assets/images/view.svg";
import WatchLater from "../../Assets/images/watch_later.svg";
import Checked from "../../Assets/images/check.svg";
import { useVideoContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
import { videoExists } from "../../Utils/utils";
import { useToastHook } from "../../CustomHook/useToastHook";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { addVideoInHistory } from "../../ServerRequests";
import { toggleWatchLaterVideos } from "../../ServerRequests";
import { useAuth } from "../../Context/auth-context";

export const VideoCard = ({ _id }) => {
  const toast = useToastHook(3000);
  const navigate = useNavigate();
  const {
    state: { videos, watchLater },
    dispatch,
  } = useVideoContext();

  const videoDetailsFromState = videos.find((video) => video._id === _id);

  const {
    videoId,
    title,
    publishedDate,
    description,
    thumbnailUrl,
    duration,
    channelImageUrl,
    channelName,
    statistics: { viewsCount },
  } = videoDetailsFromState;

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  return (
    <>
      <div className="card">
        <Link
          to={`/video/${_id}`}
          state={{ videoDetailsFromState }}
          onClick={() => addVideoInHistory(_id, dispatch)}
        >
          <div className="cardInner">
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
        </Link>
        <AddToPlaylist videoId={videoId} _id={_id} />
        {videoExists(watchLater, _id) ? (
          <img
            src={Checked}
            title="Added to watch later"
            alt="watch_later"
            className="cardHeaderIcon watchLaterIcon"
            onClick={() => {
              toggleWatchLaterVideos(_id, dispatch);
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
              toggleWatchLaterVideos(_id, dispatch);
              toast("success", "Video Added to Watch Later");
            }}
          ></img>
        )}
      </div>
    </>
  );
};
