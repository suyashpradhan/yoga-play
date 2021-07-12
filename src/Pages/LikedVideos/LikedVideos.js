import React from "react";
import { useVideoContext } from "../../Context";
import { LikedVideoCard } from "../../Components/LikeVideos";
import { Sidebar } from "../../Components/Sidebar/";

export const LikedVideos = () => {
  const {
    state: { favourites },
  } = useVideoContext();

  return (
    <>
      <main className="main">
        <div className="pageLayout">
          <Sidebar />
          <h1 className="pageHeader">Liked Videos</h1>
          {favourites.length === 0 && <p>no videos</p>}
          {favourites.map((_id) => (
            <LikedVideoCard key={_id} _id={_id} />
          ))}
        </div>
      </main>
    </>
  );
};
