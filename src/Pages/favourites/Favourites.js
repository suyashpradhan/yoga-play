import React from "react";
import { useVideoContext } from "../../context";
import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";

export const Favourites = () => {
  const {
    state: { favourites },
  } = useVideoContext();

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <h1 className="pageHeader">Favourites</h1>
          {favourites.length === 0 && <p>no videos</p>}
          {favourites.map((_id) => (
            <Card key={_id} _id={_id} />
          ))}
        </div>
      </main>
    </>
  );
};
