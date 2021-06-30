import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducers";
const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    videos: [],
    likeVideos: [],
    watchLater: [],
    playlists: [],
    searchedText: "",
    toggleSidebar: true,
    modal: false,
    loader: false,
  });

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
