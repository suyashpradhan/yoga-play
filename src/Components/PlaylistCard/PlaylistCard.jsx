import { useVideoContext } from "../../Context";
import { getVideoDetails } from "../../Utils/utils";
import "./PlaylistCard.css";

export const PlaylistCard = ({ playlistId, videoId }) => {
  const {
    state: { videos },
    dispatch,
  } = useVideoContext();

  const { id, thumbnailUrl, duration, title, channelName } = getVideoDetails(
    videos,
    videoId
  );

  return (
    <div className="playlistCard">
      <div className="cardImage">
        <img src={thumbnailUrl} alt="title" className="cardImage"></img>
      </div>
      <h4 className="videoDuration">{duration}</h4>
      <div className="cardBody">
        <h1 className="videoTitle">{title}</h1>
        <h4 class="channelName">{channelName}</h4>
        <div className="flex j-content-center a-items-center">
          <button
            className="button button-danger mT1"
            onClick={() =>
              dispatch({
                type: "DELETE_VIDEO_FROM_PLAYLISTS",
                payload: { playlistId, videoId },
              })
            }
          >
            Delete video from playlist
          </button>
        </div>
      </div>
    </div>
  );
};
