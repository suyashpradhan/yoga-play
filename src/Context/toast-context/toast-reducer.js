import { ACTIONS } from "./toast.actions";

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TOAST:
      return {
        ...state,
        toastMessage: action.payload,
      };

    default:
      return state;
  }
};
