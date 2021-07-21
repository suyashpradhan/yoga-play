import React, { createContext, useContext, useReducer } from "react";
import { toastReducer } from "./toast-reducer";

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [state, toastDispatch] = useReducer(toastReducer, {
    toastMessage: "",
  });

  return (
    <ToastContext.Provider value={{ state, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
