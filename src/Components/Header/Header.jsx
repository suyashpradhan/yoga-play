import React from "react";
import { useVideoContext } from "../../context";
import { FaBars } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Close from "../../assets/images/cancel.svg";
import "./Header.css";
import { useAuth } from "../../context";

export const Header = () => {
  const {
    state: { searchedText },
    dispatch,
  } = useVideoContext();

  const {
    userAuthState: { isLoggedIn },
    userAuthDispatch,
  } = useAuth();

  const handleLogout = () => {
    localStorage?.removeItem("login");
    userAuthDispatch({
      type: "SET_LOGOUT",
    });
    dispatch({
      type: "SET_WATCHLATER",
      payload: [],
    });
    dispatch({
      type: "SET_HISTORY",
      payload: [],
    });
    dispatch({
      type: "SET_PLAYLISTS",
      payload: [],
    });
    dispatch({
      type: "SET_FAVOURITES",
      payload: [],
    });
  };

  return (
    <nav className="navBar flex pT1 pB1 j-space-between a-items-center pR1 pL1">
      <div className="leftNavBar">
        <FaBars
          className="menuIcon"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        />
        <Link to="/">
          <img
            src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/logo.svg"
            alt="logo"
            className="logo"
          ></img>
        </Link>
      </div>
      <div className="middleNavBar">
        <input
          type="text"
          placeholder="Search Video"
          value={searchedText}
          className="searchField"
          onChange={(e) =>
            dispatch({
              type: "SEARCH_VIDEO",
              payload: e.target.value,
            })
          }
        />
        <div className="searchIconWrapper">
          <img
            src={Close}
            alt="cancel"
            onClick={() => {
              dispatch({ type: "CLEAR_SEARCH" });
            }}
            className="searchIcon"
          ></img>
        </div>
      </div>
      <div className="rightNavBar  flex j-space-between a-items-center">
        <a
          href="https://github.com/suyashpradhan/yoga-play"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon mR1" />
        </a>

        {isLoggedIn ? (
          <button className="button button-red" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="login">
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
        )}
      </div>
    </nav>
  );
};
