export { fetchAllVideos } from "./video-server-requests";

export { registerUser, loginUser } from "./server-requests";

export {
  fetchFavouriteVideosList,
  addVideoToFavourites,
} from "./favourites-server-requests";

export {
  fetchUserWatchHistory,
  addVideoInHistory,
  removeVideoFromHistory,
  clearWatchHistory,
} from "./history-server-requests";
