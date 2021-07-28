import { v4 as uuid } from "uuid";
import { videoExists } from "../../utils";
import { ACTIONS } from "./state.actions";

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

    case ACTIONS.TOGGLE_TOAST:
      return { ...state, toastMessage: action.payload };

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
      return { ...state, favourites: action.payload };

    case ACTIONS.TOGGLE_FAVOURITES:
      return {
        ...state,
        toastMessage: videoExists(state.favourites, action.payload)
          ? "Removed video from Favourites"
          : "Added video to Favourites",
        favourites: videoExists(state.favourites, action.payload)
          ? state.favourites.filter((video) => video !== action.payload)
          : state.favourites.concat(action.payload),
      };

    /* case ACTIONS.SET_HISTORY:
      return {
        ...state,
        history: action.payload,
      };

    case ACTIONS.ADD_VIDEO_IN_HISTORY:
      return {
        ...state,
        history: state.history.concat(action.payload),
      }; */

    case ACTIONS.SET_WATCHLATER:
      return {
        ...state,
        watchLater: action.payload,
      };

    case ACTIONS.TOGGLE_WATCHLATER:
      return {
        ...state,
        toastMessage: videoExists(state.watchLater, action.payload)
          ? "Removed video from Watch Later"
          : "Added video to Watch Later",
        watchLater: videoExists(state.watchLater, action.payload)
          ? state.watchLater.filter((video) => video !== action.payload)
          : state.watchLater.concat(action.payload),
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
        toastMessage: isVideoPresent
          ? `Video removed from ${getPlaylist.playlistName}`
          : `Video added to ${getPlaylist.playlistName}`,
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

    case ACTIONS.SET_NOTES:
      return { ...state, notes: action.payload };

    case ACTIONS.ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat({ ...action.payload }),
        toastMessage: "Note added successfully",
      };

    case ACTIONS.UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
        toastMessage: "Note updated successfully",
      };

    case ACTIONS.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload._id),
        toastMessage: "Note deleted successfully",
      };

    default:
      return state;
  }
};
