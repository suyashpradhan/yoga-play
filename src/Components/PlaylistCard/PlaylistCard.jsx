import { useVideoContext } from "../../context";
import "./PlaylistCard.css";

export const PlaylistCard = ({ playlistId, _id, videoId }) => {
  const {
    state: { videos },
    dispatch,
  } = useVideoContext();

  const getVideo = videos.find((video) => video.videoId === videoId);

  return (
    <div className="playlistCard">
      <div className="cardImage">
        <img
          src={getVideo.thumbnailUrl}
          alt="title"
          className="cardImage"
        ></img>
      </div>
      <h4 className="videoDuration">{getVideo.duration}</h4>
      <div className="cardBody">
        <h1 className="videoTitle">{getVideo.title}</h1>
        <h4 class="channelName">{getVideo.channelName}</h4>
        <div className="flex j-content-center a-items-center">
          <button
            className="button button-danger mT1"
            onClick={() => {
              setTimeout(() => {
                dispatch({
                  type: "DELETE_VIDEO_FROM_PLAYLISTS",
                  payload: { playlistId, videoId },
                });
                dispatch({
                  type: "TOGGLE_TOAST",
                  payload: "Video Removed From Playlist ",
                });
              }, 1000);
            }}
          >
            Delete video from playlist
          </button>
        </div>
      </div>
    </div>
  );
};
