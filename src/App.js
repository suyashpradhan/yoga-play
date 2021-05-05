import "./Assets/styles/base.css";
import { Router } from "./Routers";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { ToastContainer } from "./Components/Toast";

export const App = () => {
  return (
    <div className="body">
      <Header />
      <Sidebar />
      <Router />
      <ToastContainer />
    </div>
  );
};
