import "./VideoDetails.css";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import { Sidebar } from "../../components/Sidebar";
import { useVideoContext } from "../../context";
import { videoExists } from "../../utils";
import Like from "../../assets/images/like.svg";
import LikeFilled from "../../assets/images/like-filled.svg";
import WatchLater from "../../assets/images/watch_later.svg";
import Checked from "../../assets/images/check.svg";
import { AddToPlaylist } from "../../components/Playlist/AddToPlaylist";
import { toggleFavouriteVideos } from "../../services";
import { toggleWatchLaterVideos } from "../../services";

export const VideoDetails = () => {
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
            <div className="row">
              <div className="xl-8">
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
                            }}
                          />
                        </button>
                      ) : (
                        <button className="buttonTransparent">
                          <img
                            src={Like}
                            onClick={() => {
                              toggleFavouriteVideos(_id, dispatch);
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
                            }}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="videoDescription">{description}</p>
                </div>
              </div>
              <div className="xl-4">
                <h3>hello world!</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
