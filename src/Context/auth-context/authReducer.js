import * as actions from "./actions";

export const userAuthReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userAuthToken: action.payload.token,
      };
    case actions.SET_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userAuthToken: null,
      };
    default:
      return state;
  }
};
