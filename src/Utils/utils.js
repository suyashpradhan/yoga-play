export const getVideoDetails = (videos, videoId) => {
  return videos.find((video) => video.id === videoId);
};

export const videoExists = (videos, id) => {
  return videos.some((videoId) => videoId === id);
};

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
