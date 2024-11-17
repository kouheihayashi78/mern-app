import React from "react";
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Home className="sidebar-icon" />
            <span className="sidebar-list-item-text">ホーム</span>
          </li>
          <li className="sidebar-list-item">
            <Search className="sidebar-icon" />
            <span className="sidebar-list-item-text">検索</span>
          </li>
          <li className="sidebar-list-item">
            <Notifications className="sidebar-icon" />
            <span className="sidebar-list-item-text">通知</span>
          </li>
          <li className="sidebar-list-item">
            <MessageRounded className="sidebar-icon" />
            <span className="sidebar-list-item-text">メッセージ</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-icon" />
            <span className="sidebar-list-item-text">ブックマーク</span>
          </li>
          <li className="sidebar-list-item">
            <Person className="sidebar-icon" />
            <span className="sidebar-list-item-text">プロフィール</span>
          </li>
          <li className="sidebar-list-item">
            <Settings className="sidebar-icon" />
            <span className="sidebar-list-item-text">設定</span>
          </li>
        </ul>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          <li className="sidebar-friend">
            <img src="/assets/person/2.jpeg" alt="友達2" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">友達2</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/3.jpeg" alt="友達3" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">友達3</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/4.jpeg" alt="友達4" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">友達4</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
