import React, { useState } from "react";
import PostItem from "./PostItem";

import { Dummy_data } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState(Dummy_data);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map((item) => {
            return <PostItem key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <h2 className="center">No posts Found</h2>
      )}
    </section>
  );
};

export default Posts;
