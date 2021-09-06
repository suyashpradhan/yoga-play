import axios from "axios";
import { favourites } from "../api";

export const fetchFavouriteVideosList = async (dispatch) => {
  try {
    const {
      data: { favouriteVideos },
    } = await axios.get(`${favourites}`);
    const videoList = favouriteVideos.map((item) => item._id);
    dispatch({ type: "SET_FAVOURITES", payload: videoList });
  } catch (error) {
    console.error(error);
  }
};

export const toggleFavouriteVideos = async (_id, dispatch) => {
  try {
    dispatch({ type: "TOGGLE_TOAST", payload: "Adding Video..." });
    const { data } = await axios.post(favourites, {
      _id: _id,
    });
    if (data.success) {
      dispatch({
        type: "TOGGLE_FAVOURITES",
        payload: _id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
