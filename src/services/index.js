export { fetchAllVideos } from "./video-server-requests";

export { registerUser, loginUser } from "./authentication-server-requests";

export {
  fetchFavouriteVideosList,
  toggleFavouriteVideos,
} from "./favourites-server-requests";

/* export {
  fetchUserWatchHistory,
  addVideoInHistory,
  removeVideoFromHistory,
  clearWatchHistory,
} from "./history-server-requests"; */

export {
  fetchUserWatchLater,
  toggleWatchLaterVideos,
} from "./watchLater-server-request";
