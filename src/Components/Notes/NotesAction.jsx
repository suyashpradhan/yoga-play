import { useReducer } from "react";
import { notesReducer, initialState } from "../../reducers";
import { useVideoContext } from "../../context";
import { updateVideoNote, addVideoNote } from "../../services";
import { Note } from "./Note";

export const NotesAction = ({ videoId = "", setEditNote, _id }) => {
  const [noteState, noteDispatch] = useReducer(notesReducer, initialState);
  const {
    state: { notes },
    dispatch,
  } = useVideoContext();

  const updateNotes = async () => {
    if (noteState._id) {
      await updateVideoNote(videoId, noteState, dispatch);
      setEditNote(false);
    } else {
      await addVideoNote(videoId, noteState, dispatch);
      noteDispatch({ type: "CLEAR_INPUT" });
    }
  };

  return (
    <>
      <div className="notes-container">
        <div className="notes-container-body">
          <h2 className="notes-header mB1">Take Your Notes</h2>
          <div className="notes-field-container">
            <div className="formGroup">
              <label htmlFor="" className="label">
                Title
              </label>
              <input
                type="text"
                value={noteState.title}
                onChange={(e) =>
                  noteDispatch({
                    type: "SET_NOTE_TITLE",
                    payload: e.target.value,
                  })
                }
                className="formField"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Content
              </label>
              <textarea
                type="text"
                value={noteState.content}
                onChange={(e) =>
                  noteDispatch({
                    type: "SET_NOTE_CONTENT",
                    payload: e.target.value,
                  })
                }
                className="formField formFieldTextArea"
              />
            </div>
            <button onClick={updateNotes} className="button button-primary">
              Add Note
            </button>
          </div>
        </div>
        <div className="notes-display-container">
          <h1 className="notes-display-container-header">My Notes List </h1>
          {notes.length > 0 ? (
            notes
              .slice(0)
              .reverse()
              .map((note) => <Note key={note._id} note={note} videoId={_id} />)
          ) : (
            <p className="notes-display-container-description">
              No Notes Added, Add One
            </p>
          )}
        </div>
      </div>
    </>
  );
};
