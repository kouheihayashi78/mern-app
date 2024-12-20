import React from "react";
import "./Profile.css";
import { Topbar } from "../../components/topbar/Topbar.tsx";
import { Sidebar } from "../../components/sidebar/Sidebar.tsx";
import { TimeLine } from "../../components/timeline/TimeLine.tsx";
import { Rightbar } from "../../components/rightbar/Rightbar.tsx";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER+'post/3.jpeg'} //デフォルト画像は決めてない。
                alt=""
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER+'person/1.jpeg'}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">H.K</h4>
              <span className="profileInfoDesc">よろしくお願いいたします。</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
