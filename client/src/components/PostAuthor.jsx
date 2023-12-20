import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar13.jpg";

const PostAuthor = () => {
  return (
    <Link to={`post/users/sdfsdf`} className="post_author">
      <div className="post_author-avatar">
        <img src={avatar} alt="Image" />
      </div>
      <div className="post_author-details">
        <h5>By:Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
