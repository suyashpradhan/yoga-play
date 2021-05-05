import React, { createContext, useContext, useReducer } from "react";
import { toastReducer } from "../Reducers";

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: [],
  });

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
