import "./VideoDetails.css";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { Sidebar } from "../../Components/Sidebar";
import { useVideoContext } from "../../Context";
import { getVideoDetails, videoExists } from "../../Utils";
import Like from "../../Assets/images/like.svg";
import LikeFilled from "../../Assets/images/like-filled.svg";
import WatchLater from "../../Assets/images/watch_later.svg";
import Checked from "../../Assets/images/check.svg";
import { useToastHook } from "../../CustomHook/useToastHook";
import { AddToPlaylist } from "../../Components/Playlist/AddToPlaylist";
import { addVideoToFavourites } from "../../ServerRequests";

export const VideoDetails = () => {
  const toast = useToastHook(3000);
  const { _id } = useParams();
  const {
    state: { videos, likeVideos, watchLater },
    dispatch,
  } = useVideoContext();

  const {
    title,
    description,
    publishedDate,
    statistics: { viewCount },
  } = getVideoDetails(videos, _id);

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <div className="container">
            <div className="reactPlayer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=`}
                controls={true}
                playing={true}
                width="100%"
                height="100%"
                className="reactPlayer"
              />
            </div>
            <div className="videoDetails">
              <div className="videoStats">
                <h4 className="totalViews">{viewCount} views</h4>
                <h5 className="publishedDate"> • {publishedDate}</h5>
              </div>
              <div className="videoDetailsHeader flex j-space-between a-items-center">
                <h1 className="videoDetailsTitle">{title}</h1>
                <div className="videoDetailsIconWrapper">
                  {videoExists(likeVideos, _id) ? (
                    <button className="buttonTransparent">
                      <img
                        src={LikeFilled}
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_LIKE_VIDEOS",
                            payload: _id,
                          });
                          toast("error", "Video removed from like videos ");
                        }}
                        alt="likeVideo"
                        className="VideoDetailsIcons"
                      />
                    </button>
                  ) : (
                    <button className="buttonTransparent">
                      <img
                        src={Like}
                        onClick={() => {
                          addVideoToFavourites(_id, dispatch);
                          toast("error", "Video added to like videos ");
                        }}
                        alt="likeVideo"
                        className="VideoDetailsIcons"
                      />
                    </button>
                  )}

                  {/* <button className="buttonTransparent">
                    <AddToPlaylist videoId={id} />
                  </button>
                  {videoExists(watchLater, id) ? (
                    <button className="buttonTransparent">
                      <img
                        src={Checked}
                        alt="watch-later"
                        title="Added to watch later"
                        className="VideoDetailsIcons"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_WATCH_LATER",
                            payload: id,
                          });
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
                          dispatch({
                            type: "ADD_TO_WATCH_LATER",
                            payload: id,
                          });
                          toast("error", "Video added to watch later");
                        }}
                      />
                    </button>
                  )} */}
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
