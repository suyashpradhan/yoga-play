import "./VideoDetails.css";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import { Sidebar } from "../../Components/Sidebar";
import { useVideoContext } from "../../Context";
import { videoExists } from "../../Utils";
import Like from "../../Assets/images/like.svg";
import LikeFilled from "../../Assets/images/like-filled.svg";
import WatchLater from "../../Assets/images/watch_later.svg";
import Checked from "../../Assets/images/check.svg";
import { useToastHook } from "../../CustomHook/useToastHook";
import { AddToPlaylist } from "../../Components/Playlist/AddToPlaylist";
import { toggleFavouriteVideos } from "../../ServerRequests";
import { toggleWatchLaterVideos } from "../../ServerRequests";

export const VideoDetails = () => {
  const toast = useToastHook(3000);
  const {
    state: { videoDetailsFromState },
  } = useLocation();
  const {
    state: { favourites, watchLater },
    dispatch,
  } = useVideoContext();

  const {
    _id,
    videoId,
    title,
    publishedDate,
    description,
    statistics: { viewsCount },
  } = videoDetailsFromState;

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <div className="container">
            <div className="reactPlayer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls={true}
                playing={true}
                width="100%"
                height="100%"
                className="reactPlayer"
              />
            </div>
            <div className="videoDetails">
              <div className="videoStats">
                <h4 className="totalViews">{viewsCount} views</h4>
                <h5 className="publishedDate"> • {publishedDate}</h5>
              </div>
              <div className="videoDetailsHeader flex j-space-between a-items-center">
                <h1 className="videoDetailsTitle">{title}</h1>
                <div className="videoDetailsIconWrapper">
                  {videoExists(favourites, _id) ? (
                    <button className="buttonTransparent">
                      <img
                        src={LikeFilled}
                        alt="likeVideo"
                        className="VideoDetailsIcons"
                        onClick={() => {
                          toggleFavouriteVideos(_id, dispatch);
                          toast("error", "Video removed from favourites ");
                        }}
                      />
                    </button>
                  ) : (
                    <button className="buttonTransparent">
                      <img
                        src={Like}
                        onClick={() => {
                          toggleFavouriteVideos(_id, dispatch);
                          toast("error", "Video added to favourites ");
                        }}
                        alt="likeVideo"
                        className="VideoDetailsIcons"
                      />
                    </button>
                  )}

                  <button className="buttonTransparent">
                    <AddToPlaylist videoId={_id} />
                  </button>
                  {videoExists(watchLater, _id) ? (
                    <button className="buttonTransparent">
                      <img
                        src={Checked}
                        alt="watch-later"
                        title="Added to watch later"
                        className="VideoDetailsIcons"
                        onClick={() => {
                          toggleWatchLaterVideos(_id, dispatch);
                          toast("error", "Video Removed from Watch Later");
                        }}
                      />
                    </button>
                  ) : (
                    <button className="buttonTransparent">
                      <img
                        src={WatchLater}
                        alt="watch-later"
                        title="Add to watch later"
                        className="VideoDetailsIcons"
                        onClick={() => {
                          toggleWatchLaterVideos(_id, dispatch);
                          toast("error", "Video Added to Watch Later");
                        }}
                      />
                    </button>
                  )}
                </div>
              </div>
              <p className="videoDescription">{description}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
