import axios from "axios";
import { favourites } from "../API/urls";

export const fetchFavouriteVideosList = async (dispatch) => {
  try {
    const {
      data: { favouriteVideoItem },
    } = await axios.get(`${favourites}`);
    const videoList = favouriteVideoItem.map((item) => item._id);
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
    if (response.status === 200) {
      dispatch({
        type: "TOGGLE_FAVOURITES",
        payload: _id,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

/* export const removeItemFromWishlist = async (
  product,
  dispatch,
  isLoggedIn,
  token
) => {
  isUserLoggedIn({
    isLoggedIn,
    callback: async () => {
      try {
        const { _id } = product;
        const response = await axios.delete(`${favourites}/${_id}`, {
          headers: { authorization: token },
        });
        dispatch({ type: "DELETE_WISHLIST_ITEM", payload: product });
      } catch (error) {
        console.log(error);
      }
    },
  });
}; */
