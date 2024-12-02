import React from "react";
import './TimeLine.css'
import Share from '../share/Share.tsx';
import Post from "../post/Post.tsx";
import { Posts } from "../../dummyData.js";

export const TimeLine = () => {
  return (
    <div className="timeline">
      {/* shareコンポーネント */}
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
};
