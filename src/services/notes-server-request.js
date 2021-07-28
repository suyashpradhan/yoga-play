import axios from "axios";
import { notesURL } from "../api";

export const fetchVideoNotes = async (videoId, dispatch) => {
  try {
    const {
      data: { notes },
    } = await axios.get(`${notesURL}/notes/${videoId}`);
    if (notes) {
      dispatch({ type: "SET_NOTES", payload: notes });
    }
  } catch (err) {
    console.error(err);
  }
};

export const addVideoNote = async (videoId, noteData, dispatch) => {
  try {
    dispatch({ type: "SHOW_TOAST", payload: "Adding a new note..." });
    const {
      data: { note },
    } = await axios.post(`${notesURL}/notes/${videoId}`, {
      title: noteData.title,
      content: noteData.content,
    });
    if (note) {
      dispatch({ type: "ADD_NOTE", payload: note });
    }
  } catch (err) {
    dispatch({ type: "TOGGLE_TOAST", payload: "Failed to add new note." });
    console.error(err);
  }
};

export const updateVideoNote = async (videoId, noteData, dispatch) => {
  try {
    dispatch({ type: "TOGGLE_TOAST", payload: "Updating note..." });
    const {
      data: { note },
    } = await axios.post(`${notesURL}/note/${noteData._id}`, {
      title: noteData.title,
      description: noteData.description,
    });
    if (note) {
      dispatch({ type: "UPDATE_NOTE", payload: note });
    }
  } catch (err) {
    dispatch({ type: "TOGGLE_TOAST", payload: "Failed to update note." });
    console.error(err);
  }
};

export const deleteVideoNote = async (noteData, dispatch) => {
  try {
    dispatch({ type: "TOGGLE_TOAST", payload: "Deleting note..." });
    const {
      data: { note },
    } = await axios.put(`${notesURL}/${noteData._id}`);
    if (note) {
      dispatch({ type: "DELETE_NOTE", payload: note });
    }
  } catch (err) {
    dispatch({ type: "TOGGLE_TOAST", payload: "Failed to delete note." });
    console.error(err);
  }
};
