import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData.js";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const userFilter = (postId) => {
    const user = Users.filter((user) => user.id === postId);
    return user[0].username;
  }
  const imgFilter = (postId) => {
    const user = Users.filter((user) => user.id === postId);
    return PUBLIC_FOLDER + user[0].profilePicture;
  }
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={imgFilter(post.id)} alt="" className="postProfileImg"/>
            <span className="postUsername">{userFilter(post.id)}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={PUBLIC_FOLDER + post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={PUBLIC_FOLDER + 'heart.png'} alt=""  onClick={() => handleLike()}/>
            <span className="postLikeCounter">
            {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
