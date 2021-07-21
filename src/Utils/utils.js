export const getVideoDetails = (videos, videoId) => {
  return videos.find((video) => video._id === videoId);
};

export const videoExists = (videos, _id) => videos.some((id) => id === _id);

export const getFilteredVideo = (videos, searchedValue) => {
  return videos.filter((video) =>
    video.title.toLowerCase().includes(searchedValue.toLowerCase())
  );
};

export const updatePlaylist = (playlistId, videoId, dispatch) => {
  return dispatch({
    type: "TOGGLE_PLAYLIST",
    payload: { playlistId, videoId },
  });
};

export const isUserLoggedIn = ({ callback, isLoggedIn }) => {
  if (isLoggedIn) {
    callback();
  } else {
    alert("User not logged In!");
  }
};
