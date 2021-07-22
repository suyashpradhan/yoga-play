import "./Notes.css";
import { useAuth } from "./../../context";
import { AddNotes } from "./AddNotes";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

export const NotesContainer = ({ _id }) => {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <>
          <AddNotes videoId={_id} />
        </>
      ) : (
        <div className="notes-container">
          <h2 className="notes-header">Notes</h2>
          <img
            src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/notes.png"
            alt="temp"
            className="notes-banner"
          />
          <p className="notes-paragraph">
            Sign in to your account to add personalised notes.
          </p>
          <Link to="/login">
            <button className="button button-primary">
              Sign in
              <BiChevronRight
                style={{
                  height: "1.4rem",
                  width: "1.4rem",
                  textAlign: "right",
                  verticalAlign: "middle",
                }}
              />
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
