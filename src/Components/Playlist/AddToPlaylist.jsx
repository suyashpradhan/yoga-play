import React, { useState } from "react";
import PlaylistIcon from "../../assets/images/add_to_playlist.svg";
import { useAuth, useVideoContext } from "../../context";
import { Modal } from "../Modal/Modal";

export const AddToPlaylist = ({ videoId, _id }) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useVideoContext();

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  return (
    <>
      <img
        src={PlaylistIcon}
        alt="like"
        title="Add to Playlist"
        className="cardHeaderIcon likeIcon"
        onClick={() => {
          isLoggedIn
            ? setShowModal((showModal) => !showModal)
            : dispatch({
                type: "TOGGLE_TOAST",
                payload: "You need to login to add video to Playlist ",
              });
        }}
      ></img>
      {showModal && (
        <Modal videoId={videoId} setShowModal={setShowModal} _id={_id} />
      )}
    </>
  );
};
