import React, { useState } from "react";
import { useVideoContext } from "../../context";
import "./Modal.css";
import CloseButton from "../../assets/images/close.svg";
import { updatePlaylist, videoExists } from "../../utils/utils";

export const Modal = ({ videoId, setShowModal }) => {
  const [input, setInput] = useState("");

  const {
    state: { playlists },
    dispatch,
  } = useVideoContext();

  return (
    <div className="modal">
      <div className="modalDialog modalDialogCentered">
        <div className="modalContent">
          <div className="modalHeader">
            <h1 className="modalTitle">Add To Playlist</h1>
            <button
              className="button button-transparent"
              onClick={() => setShowModal((showModal) => !showModal)}
            >
              <img src={CloseButton} alt="close-modal" className="modalClose" />
            </button>
          </div>
          <div className="modalBody">
            {playlists.length === 0 ? (
              <h1 className="modalFooterTitle text-center">
                No Playlist available create one from below
              </h1>
            ) : (
              playlists.map(({ playlistId, playlistName, videos }) => {
                return (
                  <div className="playlist" key={playlistId}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => {
                        updatePlaylist(playlistId, videoId, dispatch);
                      }}
                      checked={videoExists(videos, videoId)}
                    />
                    <label className="label">{playlistName}</label>
                  </div>
                );
              })
            )}
          </div>
          <div className="modalFooter">
            <h2 className="modalFooterTitle">Create Playlist</h2>
            <div className="flex j-space-between a-items-center">
              <input
                type="text"
                placeholder="Playlist name"
                className="formField"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="button button-primary"
                onClick={() => {
                  setTimeout(() => {
                    dispatch({
                      type: "CREATE_NEW_PLAYLIST",
                      payload: input,
                    });
                    dispatch({
                      type: "TOGGLE_TOAST",
                      payload: `Playlist ${input} created`,
                    });
                  }, 2000);
                  setInput("");
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
