import React from "react";
import { useVideoContext } from "../../context";
import { WatchLaterCard } from "../../components/WatchLater";
import { Sidebar } from "../../components/Sidebar";

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
          : watchLater.map((_id) => <WatchLaterCard key={_id} id={_id} />)}
      </div>
    </main>
  );
};
