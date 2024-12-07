import React from "react";
import "./Profile.css";
import { Topbar } from "../../components/topbar/Topbar.tsx";
import { Sidebar } from "../../components/sidebar/Sidebar.tsx";
import { TimeLine } from "../../components/timeline/TimeLine.tsx";
import { Rightbar } from "../../components/rightbar/Rightbar.tsx";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg" //デフォルト画像は決めてない。
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/1.jpeg"
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
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
