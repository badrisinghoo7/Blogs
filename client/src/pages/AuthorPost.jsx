import React, { useState } from "react";
import { Dummy_data } from "../data";

const AuthorPost = () => {
  const [posts, setPosts] = useState(Dummy_data);
  return (
    <section className="author">
      {posts.length > 0 ? (
        <div className="container authore_container">
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

export default AuthorPost;
