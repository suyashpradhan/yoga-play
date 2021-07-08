import { v4 as uuid } from "uuid";
import { videoExists } from "../Utils";
import { ACTIONS } from "./ACTIONS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADER:
      return {
        ...state,
        loader: !state.loader,
      };

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

    case ACTIONS.SET_FAVOURITES:
      return { ...state, likedVideos: action.payload };

    case ACTIONS.TOGGLE_FAVOURITES:
      return {
        ...state,
        favourites: videoExists(state.favourites, action.payload)
          ? state.favourites.filter((video) => video !== action.payload)
          : state.favourites.concat(action.payload),
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
