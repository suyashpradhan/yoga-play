import { useVideoContext } from "../../Context";
import { getVideoDetails } from "../../Utils";
import Delete from "../../Assets/images/delete-white.svg";
import { Link } from "react-router-dom";
import "./LikeVideos.css";

export const LikedVideoCard = ({ _id }) => {
  const {
    state: { videos },
    dispatch,
  } = useVideoContext();

  console.log(_id);

  const { title, thumbnailUrl, duration, channelName, videoId } =
    getVideoDetails(videos, _id);

  return (
    <div className="horizontalCard">
      <div className="leftWrapper">
        <img src={thumbnailUrl} className="cardBannerImage" alt={title}></img>
        <h2 className="videoTiming">{duration}</h2>
      </div>

      <div className="middleWrapper">
        <Link
          to={{
            pathname: `/video/${videoId}`,
          }}
          key={videoId}
        >
          <h1 className="videoTitle">{title}</h1>
          <h1 className="channelName">{channelName}</h1>
        </Link>
      </div>
      <div className="rightWrapper">
        <img src={Delete} className="actionIcons" alt="delete"></img>
      </div>
    </div>
  );
};
