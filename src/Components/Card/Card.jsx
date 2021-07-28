import { useVideoContext } from "../../context";
import { getVideoDetails } from "../../utils";
import Delete from "../../assets/images/delete-white.svg";
import { Link } from "react-router-dom";
import "./LikeVideos.css";
import { toggleFavouriteVideos } from "../../services";

export const Card = ({ _id }) => {
  const {
    state: { videos },
    dispatch,
  } = useVideoContext();

  const { title, thumbnailUrl, duration, channelName } = getVideoDetails(
    videos,
    _id
  );

  return (
    <div className="horizontalCard">
      <div className="leftWrapper">
        <img src={thumbnailUrl} className="cardBannerImage" alt={title}></img>
        <h2 className="videoTiming">{duration}</h2>
      </div>

      <div className="middleWrapper">
        <div>
          <h1 className="videoTitle">{title}</h1>
          <h1 className="channelName">{channelName}</h1>
        </div>
      </div>
      <div className="rightWrapper">
        <img
          src={Delete}
          className="actionIcons"
          alt="delete"
          onClick={() => {
            toggleFavouriteVideos(_id, dispatch);
          }}
        ></img>
      </div>
    </div>
  );
};
