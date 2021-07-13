import axios from "axios";
import { history } from "../API";

export const fetchUserWatchHistory = async (dispatch) => {
  try {
    const {
      data: { videosInHistory },
    } = await axios.get(`${history}`);
    if (videosInHistory) {
      const videoList = videosInHistory.map((video) => video._id);
      dispatch({ type: "SET_HISTORY", payload: videoList });
    }
  } catch (e) {
    console.log(e);
  }
};

export const addVideoInHistory = async (_id, dispatch) => {
  console.log(_id);
  try {
    const { data } = await axios.post(`${history}`, {
      data: { _id },
    });
    console.log(data);
    if (data.success) {
      dispatch({ type: "ADD_VIDEO_IN_HISTORY", payload: _id });
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeVideoFromHistory = async (_id, dispatch) => {
  try {
    const { data } = await axios.put(`${history}`, {
      data: { _id },
    });
    if (data.success) {
      dispatch({ type: "REMOVE_VIDEO_FROM_HISTORY", payload: _id });
    }
  } catch (error) {
    console.error(error);
  }
};

export const clearWatchHistory = async (_id, dispatch) => {
  try {
    const { data } = await axios.delete(`${history}`, {
      data: { _id },
    });
    if (data.success) {
      dispatch({ type: "CLEAR_HISTORY", payload: _id });
    }
  } catch (error) {
    console.error(error);
  }
};
