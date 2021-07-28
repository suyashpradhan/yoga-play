import "./VideoDetails.css";
import { useEffect } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import { Sidebar } from "../../components/Sidebar";
import { useAuth, useVideoContext } from "../../context";
import { videoExists } from "../../utils";
import Like from "../../assets/images/like.svg";
import LikeFilled from "../../assets/images/like-filled.svg";
import WatchLater from "../../assets/images/watch_later.svg";
import Checked from "../../assets/images/check.svg";
import { AddToPlaylistDetails } from "../../components/Playlist/AddToPlaylistDetails";
import { toggleFavouriteVideos } from "../../services";
import { toggleWatchLaterVideos } from "../../services";
import { NotesContainer } from "../../components/Notes";
import { fetchVideoNotes } from "../../services";

export const VideoDetails = () => {
  const {
    state: { videoDetailsFromState },
  } = useLocation();
  const {
    state: { favourites, watchLater },
    dispatch,
  } = useVideoContext();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  const {
    _id,
    videoId,
    title,
    publishedDate,
    description,
    statistics: { viewsCount },
  } = videoDetailsFromState;

  useEffect(() => {
    fetchVideoNotes(_id, dispatch);
  }, []);

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <div className="row mT2">
            <div className="xl-8 lg-8 md-12 sm-12">
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
                            isLoggedIn
                              ? toggleFavouriteVideos(_id, dispatch)
                              : dispatch({
                                  type: "TOGGLE_TOAST",
                                  payload:
                                    "You need to login to add video to Favourites ",
                                });
                          }}
                          alt="likeVideo"
                          className="VideoDetailsIcons"
                        />
                      </button>
                    )}

                    <button className="buttonTransparent">
                      <AddToPlaylistDetails />
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
                            isLoggedIn
                              ? toggleWatchLaterVideos(_id, dispatch)
                              : dispatch({
                                  type: "TOGGLE_TOAST",
                                  payload:
                                    "You need to login to add video to Watch Later ",
                                });
                          }}
                        />
                      </button>
                    )}
                  </div>
                </div>
                <p className="videoDescription">{description}</p>
              </div>
            </div>
            <div className="xl-4 lg-4 md-12 sm-12">
              <NotesContainer _id={_id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
