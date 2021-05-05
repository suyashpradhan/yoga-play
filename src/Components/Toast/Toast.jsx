import React from "react";
import "./Toast.css";
import Close from "../../Assets/images/close.svg";

export const Toast = ({ message }) => {
  return (
    <>
      <div className="toast p1">
        <p className="toastMessage">{message}</p>
        <img src={Close} alt="" className="toastIcon" />
      </div>
    </>
  );
};
