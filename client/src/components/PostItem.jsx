import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  category,
  thumbnail,
  title,
  description,
  authorID,
}) => {
  const shortDescription =
    description.length > 120
      ? description.substr(0, 120) + "....."
      : description;
  const postTitle = title.length > 20 ? title.substr(0, 20) + "....." : title;
  return (
    <article className="post">
      <div className="post_thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post_content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
      </div>
      <div className="post_footer">
        <PostAuthor />
        <Link to={`/posts/categories/${category}`} className="btn category">
          {category}
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
