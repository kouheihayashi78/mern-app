import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="./assets/person/1.jpeg" alt="" className="postProfileImg"/>
            <span className="postUsername">テスト 太郎</span>
            <span className="postDate">10分前</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNSアプリ製作中です</span>
          <img className="postImg" src="./assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="./assets/heart.png" alt=""
            />
            <span className="postLikeCounter">
              1人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
