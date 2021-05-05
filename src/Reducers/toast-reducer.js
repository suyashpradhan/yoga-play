export const ACTIONS = {
  ADD_TOAST: "ADD_TOAST",
  DELETE_TOAST: "DELETE_TOAST",
};

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case ACTIONS.DELETE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    default:
      return state;
  }
};
