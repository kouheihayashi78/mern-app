import React from "react";

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">
          mern-app
        </span>
        <div className="topbar-center">
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="調べたいことを入力してください" />
          </div>
        </div>
        <div className="topbar-right">
          <div className="icon-area">
            <img src="" alt="1" />
          </div>
          <div className="btn-area">
            <img src="" alt="2" />
          </div>
          <div className="btn-area">
            <img src="" alt="3" />
          </div>
        </div>
      </div>
    </div>
  );
};
