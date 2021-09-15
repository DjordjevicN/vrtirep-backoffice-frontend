import React, { useState } from "react";
import {
  FaRegUser,
  FaRegNewspaper,
  FaPaw,
  FaRegFlag,
  FaHome,
} from "react-icons/fa";
import "./SideMenu.scss";
import { Link } from "react-router-dom";

function SideMenu() {
  const [selectedTab, SetSelectedTab] = useState("");

  return (
    <div className="sideMenu">
      <div className="sideMenu__content">
        <div className="sideMenu__avatar">
          <img src="/images/user.jpg" alt="avatar" />
          <p>Nikola Djordjevic</p>
        </div>
        <div className="sideMenu__nabBar">
          <Link
            to="/"
            className={`menuItem  ${
              selectedTab === "homeMenuItem" ? "homeMenuItem" : null
            }`}
            onClick={() => {
              SetSelectedTab("homeMenuItem");
            }}
          >
            {/* <FaHome /> */}
            <p>HOME</p>
            <div
              className={`menuItem  ${
                selectedTab === "homeMenuItem" ? "homeMenuItem" : null
              }`}
              onClick={() => {
                SetSelectedTab("homeMenuItem");
              }}
            ></div>
          </Link>
          <Link
            to="/userPage"
            className={`menuItem  ${
              selectedTab === "userMenuItem" ? "userMenuItem" : null
            }`}
            onClick={() => {
              SetSelectedTab("userMenuItem");
            }}
          >
            <FaRegUser />
            <p>USER</p>
          </Link>
          <Link
            to="/blogPage"
            className={`menuItem  ${
              selectedTab === "blogMenuItem" ? "blogMenuItem" : null
            }`}
            onClick={() => {
              SetSelectedTab("blogMenuItem");
            }}
          >
            <FaRegNewspaper />
            <p>BLOG</p>
          </Link>
          <Link
            to="/animalPage"
            className={`menuItem  ${
              selectedTab === "animalMenuItem" ? "animalMenuItem" : null
            }`}
            onClick={() => {
              SetSelectedTab("animalMenuItem");
            }}
          >
            <FaPaw />
            <p>ANIMALS</p>
          </Link>
          <Link
            to="/bannerPage"
            className={`menuItem  ${
              selectedTab === "bannerMenuItem" ? "bannerMenuItem" : null
            }`}
            onClick={() => {
              SetSelectedTab("bannerMenuItem");
            }}
          >
            <FaRegFlag />
            <p>BANNERS</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
