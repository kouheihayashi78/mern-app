import React from "react";
import "./Share.css";
import Image from "@mui/icons-material/Image";
import { Analytics, Face, Gif } from "@mui/icons-material";

function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/1.jpeg"
            alt="アイコン画像"
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今何していますか？"
          />
        </div>

        <hr className="shareHr" />

        <div className="shareButtons">
          <ul className="shareOptions">
            <li className="shareOption">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">写真</span>
            </li>
            <li className="shareOption">
              <Gif className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">GIF</span>
            </li>
            <li className="shareOption">
              <Face className="shareIcon" htmlColor="yellow" />
              <span className="shareOptionText">感情</span>
            </li>
            <li className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">分析</span>
            </li>
          </ul>
          <button type="button" className="shareButton">
            投稿
          </button>
        </div>
      </div>
    </div>
  );
}

export default share;
