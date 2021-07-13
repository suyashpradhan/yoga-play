import axios from "axios";
import { watchLaterURL } from "../API/urls";

export const fetchWatchLaterVideos = async (dispatch) => {
  try {
    const {
      data: { watchLaterVideos },
    } = await axios.get(`${watchLaterURL}`);
    const videoList = watchLaterVideos.map((item) => item._id);
    dispatch({ type: "SET_WATCHLATER_VIDEOS", payload: videoList });
  } catch (error) {
    console.error(error);
  }
};

export const addVideoToWatchLater = async (_id, dispatch) => {
  try {
    const { data } = await axios.post(watchLaterURL, {
      _id: _id,
    });
    if (data.success) {
      dispatch({
        type: "ADD_VIDEO_TO_WATCHLATER",
        payload: _id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
