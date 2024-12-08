import React from "react";
import { Link } from 'react-router-dom';
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';
import './Sidebar.css';
import { Users } from '../../dummyData';
import Friend from "../Friend/Friend.tsx";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Home className="sidebar-icon" />
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <span className="sidebar-list-item-text">ホーム</span>
            </Link>
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
            <Link to="/profile/" style={{textDecoration: "none", color: "black"}}>
              <span className="sidebar-list-item-text">プロフィール</span>
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Settings className="sidebar-icon" />
            <span className="sidebar-list-item-text">設定</span>
          </li>
        </ul>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          {Users.map((user) => (
            <Friend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
