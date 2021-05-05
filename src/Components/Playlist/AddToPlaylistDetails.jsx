import React, { useState } from "react";
import PlaylistIcon from "../../Assets/images/add_to_playlist.svg";
import { Modal } from "../Modal/Modal";

export const AddToPlaylistDetails = ({ videoId }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        src={PlaylistIcon}
        alt="playlist"
        class="VideoDetailsIcons"
        onClick={() => setShowModal((showModal) => !showModal)}
      />
      {showModal && <Modal videoId={videoId} setShowModal={setShowModal} />}
    </>
  );
};
