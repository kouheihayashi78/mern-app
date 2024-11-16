import React from "react";
import Search from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../topbar/Topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">mern-app</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="調べたいことを入力してください"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <ChatIcon />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <NotificationsIcon />
            <span className="topbar-icon-badge">3</span>
          </div>
          <img src="assets/person/1.jpeg" alt="1" className="topbar-img" />
        </div>
      </div>
    </div>
  );
};
