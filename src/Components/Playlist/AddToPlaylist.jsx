import React, { useState } from "react";
import PlaylistIcon from "../../assets/images/add_to_playlist.svg";
import { useAuth, useToast } from "../../context";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

export const AddToPlaylist = ({ videoId, _id }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();

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
            : toastDispatch({
                type: "TOGGLE_TOAST",
                payload: "You need to login to add video to Playlist ",
              });
          navigate("/login");
        }}
      ></img>
      {showModal && (
        <Modal videoId={videoId} setShowModal={setShowModal} _id={_id} />
      )}
    </>
  );
};
