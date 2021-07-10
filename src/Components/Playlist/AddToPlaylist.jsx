import React, { useState } from "react";
import PlaylistIcon from "../../Assets/images/add_to_playlist.svg";
import { Modal } from "../Modal/Modal";

export const AddToPlaylist = ({ videoId }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        src={PlaylistIcon}
        alt="like"
        title="Add to Playlist"
        className="cardHeaderIcon likeIcon"
        onClick={() => setShowModal((showModal) => !showModal)}
      ></img>
      {showModal && <Modal videoId={videoId} setShowModal={setShowModal} />}
    </>
  );
};
