import React from "react";

export const Avatar = ({ user }) => {
  return (
    <img
      src={user.image}
      alt={user.title}
      style={{ width: "100px" }}
      className="Avatar"
    ></img>
  );
};
