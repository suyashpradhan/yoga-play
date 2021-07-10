import React from "react";
import { useToastContext } from "../../Context/toast-context";
import { Toast } from "./Toast";

export const ToastContainer = () => {
  const {
    state: { toasts },
  } = useToastContext();

  return (
    <div className="toastWrapper">
      {toasts &&
        toasts.map((toast) => (
          <Toast key={toast.id} id={toast.id} message={toast.message} />
        ))}
    </div>
  );
};
