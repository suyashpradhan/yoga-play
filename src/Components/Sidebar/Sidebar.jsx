import "./Sidebar.css";
import { Link } from "react-router-dom";
import { RiPlayList2Line } from "react-icons/ri";
import {
  AiOutlineHistory,
  AiOutlineClockCircle,
  AiFillHeart,
  AiFillHome,
} from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

import { useAuth, useVideoContext } from "../../context";

export const Sidebar = () => {
  const {
    state: { toggleSidebar },
  } = useVideoContext();

  const {
    userAuthState: { isLoggedIn },
  } = useAuth();

  return (
    <aside className={toggleSidebar ? "sidebar" : "sidebarToggled"}>
      <ul className="sidebarCollection">
        <li className="sidebarLists flex j-content-start a-items-center">
          <AiFillHome className="sidebarIcon" />
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li className="sidebarLists j-content-start a-items-center">
              <RiPlayList2Line className="sidebarIcon" />
              <Link to="/playlists">
                <span>Playlists</span>
              </Link>
            </li>

            <li className="sidebarLists j-content-start a-items-center">
              <AiOutlineClockCircle className="sidebarIcon" />
              <Link to="/watch-later">
                <span>Watch Later</span>
              </Link>
            </li>
            <li className="sidebarLists j-content-start a-items-center">
              <AiFillHeart className="sidebarIcon" />
              <Link to="/liked-videos">
                <span>Favourites</span>
              </Link>
            </li>
            <li className="sidebarLists j-content-start a-items-center">
              <AiOutlineHistory className="sidebarIcon" />
              <Link to="/history">
                <span>History</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <h3 className="no-login-text">
              Sign in to like videos, create playlist , and access favourite
              videos.
            </h3>
            <Link to="login">
              <button className="button button-primary">
                SIGN IN
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
          </>
        )}
      </ul>
    </aside>
  );
};
