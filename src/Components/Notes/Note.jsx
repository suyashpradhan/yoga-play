import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { MdEdit, MdDelete } from "react-icons/md";
import { useVideoContext } from "../../context";
import { deleteVideoNote } from "../../services";
import { NotesAction } from "./NotesAction";

export const Note = ({ note, videoId }) => {
  const [editNote, setEditNote] = useState(false);
  const { dispatch } = useVideoContext();

  return editNote ? (
    <NotesAction setEditNote={setEditNote} note={note} />
  ) : (
    <>
      <div class="note-container">
        <div class="note-header-row">
          <h1 class="note-title">{note.title}</h1>
          {/* <MdEdit onClick={() => setEditNote(true)} className="note-icons" /> */}
          <MdDelete
            className="note-icons"
            onClick={() => deleteVideoNote(note, dispatch)}
          />
        </div>
        <ReactMarkdown className="note-description">
          {note.content}
        </ReactMarkdown>
      </div>
    </>
  );
};
