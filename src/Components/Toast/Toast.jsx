import React, { useEffect } from "react";
import "./Toast.css";
import Close from "../../assets/images/close.svg";
import { useVideoContext } from "../../context";

export const Toast = () => {
  const {
    state: { toastMessage },
    dispatch,
  } = useVideoContext();

  const closeToast = () => {
    dispatch({ type: "TOGGLE_TOAST", payload: null });
  };

  useEffect(() => {
    const timeID = setTimeout(closeToast, 3000);
    return () => clearTimeout(timeID);
  });

  return (
    <>
      <div className="toast p1">
        <p className="toastMessage">{toastMessage}</p>
        <img src={Close} alt="" className="toastIcon" onClick={closeToast} />
      </div>
    </>
  );
};
