import React from "react";
import './TimeLine.css'
import Share from '../share/Share.tsx';

export const TimeLine = () => {
  return (
    <div className="timeline">
      {/* shareコンポーネント */}
      <div className="timelineWrapper">
        <Share />
        {/* <Post /> */}
      </div>
    </div>
  );
};
