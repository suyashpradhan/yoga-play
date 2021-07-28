import { ACTIONS } from "./notes.actions";

export const initialState = {
  _id: "",
  videoId: "",
  title: "",
  content: "",
};

export const notesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ID:
      return {
        ...state,
        _id: action.payload,
      };
    case ACTIONS.SET_NOTE_TITLE:
      return { ...state, title: action.payload };

    case ACTIONS.SET_NOTE_CONTENT:
      return { ...state, content: action.payload };

    case ACTIONS.CLEAR_INPUT:
      return initialState;

    default:
      return state;
  }
};
