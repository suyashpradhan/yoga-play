import { createContext, useContext, useReducer } from "react";
import { userAuthReducer } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
