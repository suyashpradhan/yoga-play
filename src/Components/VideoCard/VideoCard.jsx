import "./VideoCard.css";
import View from "../../assets/images/view.svg";
import WatchLater from "../../assets/images/watch_later.svg";
import Checked from "../../assets/images/check.svg";
import { useAuth, useVideoContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { videoExists } from "../../utils";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { toggleWatchLaterVideos } from "../../services";

export const VideoCard = ({ _id }) => {
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
        <Link to={`/video/${_id}`} state={{ videoDetailsFromState }}>
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
              isLoggedIn
                ? toggleWatchLaterVideos(_id, dispatch)
                : dispatch({
                    type: "TOGGLE_TOAST",
                    payload: "You need to login to add video to Watch Later ",
                  });
            }}
          ></img>
        ) : (
          <img
            src={WatchLater}
            title="Added to watch later"
            alt="watch_later"
            className="cardHeaderIcon watchLaterIcon"
            onClick={() => {
              isLoggedIn
                ? toggleWatchLaterVideos(_id, dispatch)
                : dispatch({
                    type: "TOGGLE_TOAST",
                    payload: "You need to login to add video to Watch Later ",
                  });
            }}
          ></img>
        )}
      </div>
    </>
  );
};
