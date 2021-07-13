import axios from "axios";
import { watchLaterURL } from "../API/urls";

export const fetchUserWatchLater = async (dispatch) => {
  try {
    const {
      data: { watchLaterVideos },
    } = await axios.get(`${watchLaterURL}`);
    const videoList = watchLaterVideos.map((item) => item._id);
    dispatch({ type: "SET_WATCHLATER", payload: videoList });
  } catch (error) {
    console.error(error);
  }
};

export const toggleWatchLaterVideos = async (_id, dispatch) => {
  try {
    const { data } = await axios.post(watchLaterURL, {
      _id: _id,
    });
    if (data.success) {
      dispatch({
        type: "TOGGLE_WATCHLATER",
        payload: _id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
