import axios from "axios";
import { favourites } from "../API/urls";

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

export const addVideoToFavourites = async (_id, dispatch) => {
  try {
    const response = await axios.post(favourites, {
      _id: _id,
    });
    console.log(response);
    if (response.status === 201) {
      dispatch({
        type: "TOGGLE_FAVOURITES",
        payload: _id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
