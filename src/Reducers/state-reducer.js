import { v4 as uuid } from "uuid";

export const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  ALL_VIDEOS: "ALL_VIDEOS",
  SEARCH_VIDEO: "SEARCH_VIDEO",
  CLEAR_SEARCH: "CLEAR_SEARCH",
  LIKE_VIDEO: "ADD_TO_LIKE_VIDEOS",
  UNLIKE_VIDEO: "REMOVE_FROM_LIKE_VIDEOS",
  WATCH_LATER: "ADD_TO_WATCH_LATER",
  REMOVE_FROM_WATCH_LATER: "REMOVE_FROM_WATCH_LATER",
  CREATE_NEW_PLAYLIST: "CREATE_NEW_PLAYLIST",
  TOGGLE_PLAYLIST: "TOGGLE_PLAYLIST",
  DELETE_VIDEO_FROM_PLAYLISTS: "DELETE_VIDEO_FROM_PLAYLISTS",
  DELETE_PLAYLIST: "DELETE_PLAYLIST",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    case ACTIONS.TOGGLE_SIDEBAR:
      return {
        ...state,
        toggleSidebar: !state.toggleSidebar,
      };

    case ACTIONS.ALL_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };

    case ACTIONS.SEARCH_VIDEO:
      return {
        ...state,
        searchedText: action.payload,
      };

    case ACTIONS.CLEAR_SEARCH:
      return {
        ...state,
        searchedText: "",
      };

    case ACTIONS.LIKE_VIDEO:
      return {
        ...state,
        likeVideos: [...state.likeVideos, action.payload],
      };

    case ACTIONS.UNLIKE_VIDEO:
      return {
        ...state,
        likeVideos: state.likeVideos.filter(
          (video) => video !== action.payload
        ),
      };

    case ACTIONS.WATCH_LATER:
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload],
      };

    case ACTIONS.REMOVE_FROM_WATCH_LATER:
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (video) => video !== action.payload
        ),
      };

    case ACTIONS.CREATE_NEW_PLAYLIST:
      return {
        ...state,
        playlists: [
          ...state.playlists,
          { playlistId: uuid(), playlistName: action.payload, videos: [] },
        ],
      };

    case ACTIONS.TOGGLE_PLAYLIST:
      const getPlaylist = state.playlists.find(
        (playlist) => playlist.playlistId === action.payload.playlistId
      );

      const isVideoPresent = getPlaylist.videos.some(
        (video) => video === action.payload.videoId
      );

      return {
        ...state,
        playlists: state.playlists.map((singlePlaylist) =>
          singlePlaylist.playlistId === getPlaylist.playlistId
            ? {
                ...singlePlaylist,
                videos: isVideoPresent
                  ? singlePlaylist.videos.filter(
                      (videoId) => videoId !== action.payload.videoId
                    )
                  : singlePlaylist.videos.concat(action.payload.videoId),
              }
            : singlePlaylist
        ),
      };

    case ACTIONS.DELETE_VIDEO_FROM_PLAYLISTS:
      return {
        ...state,
        playlists: state.playlists.map((singlePlaylist) =>
          singlePlaylist.playlistId === action.payload.playlistId
            ? {
                ...singlePlaylist,
                videos: singlePlaylist.videos.filter(
                  (videoId) => videoId !== action.payload.videoId
                ),
              }
            : singlePlaylist
        ),
      };

    case ACTIONS.DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist.playlistId !== action.payload
        ),
      };

    default:
      return state;
  }
};
