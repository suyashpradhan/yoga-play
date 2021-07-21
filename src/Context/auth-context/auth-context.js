import { createContext, useContext, useReducer } from "react";
import { userAuthReducer } from "./auth-reducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const userLoginDetails = JSON.parse(localStorage?.getItem("login")) || {
    isLoggedIn: false,
    userAuthToken: null,
  };

  const [userAuthState, userAuthDispatch] = useReducer(
    userAuthReducer,
    userLoginDetails
  );

  return (
    <AuthContext.Provider value={{ userAuthState, userAuthDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
