import React from "react";

const Friend = ({ user }) => {
  return (
    <li className="sidebar-friend">
      <img
        src={user.profilePicture}
        alt="友達"
        className="sidebar-friend-img"
      />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
};

export default Friend;
