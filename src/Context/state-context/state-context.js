import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./state-reducer";
const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    videos: [],
    favourites: [],
    watchLater: [],
    playlists: [],
    history: [],
    searchedText: "",
    toggleSidebar: true,
    modal: false,
    loader: false,
    toastMessage: "",
  });

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
