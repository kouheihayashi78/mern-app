import React from "react";
import Search from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">
          mern-app
        </span>
        <div className="topbar-center">
          <div className="search-bar">
            <Search className="search-icon" />
            <input type="text" className="search-input" placeholder="調べたいことを入力してください" />
          </div>
        </div>
        <div className="topbar-right">
          <div className="btn-area">
            <ChatIcon />
          </div>
          <div className="btn-area">
            <NotificationsIcon />
          </div>
        </div>
        <div className="icon-area">
            <img src="assets/person/1.jpeg" alt="1" />
        </div>
      </div>
    </div>
  );
};
