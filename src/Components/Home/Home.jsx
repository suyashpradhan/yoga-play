import React from "react";
import { Sidebar } from "../Sidebar";
import { VideosList } from "../VideosList";

export const Home = () => {
  return (
    <div className="pageLayout">
      <VideosList />
      <Sidebar />
    </div>
  );
};
