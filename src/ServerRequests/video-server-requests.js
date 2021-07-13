import axios from "axios";
import { videos } from "../API";

export const fetchAllVideos = async (dispatch, loader) => {
  try {
    dispatch({ type: "SET_LOADER", payload: loader });
    const response = await axios.get(videos);
    if (response.status === 200) {
      dispatch({
        type: "ALL_VIDEOS",
        payload: response.data.allVideos,
      });
    }
    dispatch({ type: "SET_LOADER", payload: loader });
  } catch (error) {
    console.error(error);
  }
};
