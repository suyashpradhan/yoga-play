import React from "react";
import { useVideoContext } from "../../Context";
import { WatchLaterCard } from "./WatchLaterCard";
import "./WatchLater.css";
import { Sidebar } from "../Sidebar";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useVideoContext();

  return (
    <main className="main">
      <div className="pageLayout">
        <Sidebar />
        <h1 className="pageHeader">Watch Later</h1>
        {watchLater.length === 0
          ? ""
          : watchLater.map((id) => <WatchLaterCard key={id} id={id} />)}
      </div>
    </main>
  );
};
