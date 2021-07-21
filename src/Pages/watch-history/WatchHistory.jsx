import React from "react";
import { useVideoContext } from "../../context";
import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";

export const WatchHistory = () => {
  const {
    state: { history },
  } = useVideoContext();

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <h1 className="pageHeader">Liked Videos</h1>
          {history.length === 0 && <p>no videos</p>}
          {history.map((_id) => (
            <Card key={_id} _id={_id} />
          ))}
        </div>
      </main>
    </>
  );
};
