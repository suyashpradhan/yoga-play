import "./Sidebar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiPlayList2Line } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useVideoContext } from "../../Context";

export const Sidebar = () => {
  const {
    state: { toggleSidebar },
  } = useVideoContext();
  return (
    <aside className={toggleSidebar ? "sidebar" : "sidebarToggled"}>
      <ul className="sidebarCollection">
        <li className="sidebarLists flex j-content-start a-items-center">
          <AiFillHome className="sidebarIcon" />
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
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
            <span>Liked Videos</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
