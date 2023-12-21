import React, { useState } from "react";
import { Dummy_data } from "../data";

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
