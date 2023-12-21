import React, { useState } from "react";
import { Dummy_data } from "../data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(Dummy_data);
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard_container">
          {posts.map((item) => {
            return (
              <article className="dashboard_post">
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={item.avatar} alt="Name" />
                  </div>
                  <h5>{item.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${item.id}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${item.id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/posts/${item.id}/delete`}
                    className="btn sm danger"
                  >
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2>No posts found</h2>
      )}
    </section>
  );
};

export default Dashboard;
