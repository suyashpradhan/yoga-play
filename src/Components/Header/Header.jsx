import React from "react";
import { useVideoContext } from "../../Context";
import { FaBars } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo_2.svg";
import Close from "../../Assets/images/cancel.svg";
import "./Header.css";

export const Header = () => {
  const {
    state: { searchedText },
    dispatch,
  } = useVideoContext();

  return (
    <nav className="navBar flex pT1 pB1 j-space-between a-items-center pR1 pL1">
      <div className="leftNavBar">
        <FaBars
          className="menuIcon"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        />
        <Link to="/">
          <img src={Logo} alt="logo" className="logo"></img>
          <span className="logoText">YOGAPLAY</span>
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
      <div className="rightNavBar flex j-space-between a-items-center">
        <a
          href="https://github.com/suyashpradhan"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" />
        </a>
        <a
          href="https://www.notion.so/Changelog-e738c781dfe844c89c97e191875febc4"
          className="link link-white mL1"
          target="_blank"
          rel="noreferrer"
        >
          V1
        </a>
      </div>
    </nav>
  );
};
