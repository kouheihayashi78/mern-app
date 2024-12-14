import React, { useEffect, useState } from "react";
import './TimeLine.css'
import Share from '../share/Share.tsx';
import Post from "../post/Post.tsx";
import axios from "axios";

export const TimeLine = () => {
  const [ posts, setPosts ] = useState<string[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/posts/timeline/671ca9012a8510b37cd72c4f');
        console.log(res.data)
        setPosts(res.data);
      } catch (e) {
        console.error(e.response)
      }
    }
    fetchPosts();
  }, []);
  
  return (
    <div className="timeline">
      {/* shareコンポーネント */}
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
};
