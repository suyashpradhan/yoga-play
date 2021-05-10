import "./Assets/styles/base.css";
import { Router } from "./Routers";
import { Header } from "./Components/Header";
import { ToastContainer } from "./Components/Toast";

export const App = () => {
  return (
    <div className="body">
      <Header />
      <Router />
      <ToastContainer />
    </div>
  );
};
