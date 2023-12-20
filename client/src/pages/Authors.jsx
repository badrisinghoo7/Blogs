import React, { useState } from "react";
import avt1 from "../images/avatar1.jpg";
import avt2 from "../images/avatar2.jpg";
import avt3 from "../images/avatar3.jpg";
import avt4 from "../images/avatar4.jpg";
import { Link } from "react-router-dom";

const authorData = [
  { id: 1, avatar: avt1, name: "Ernest Acheiver", posts: 3 },
  { id: 2, avatar: avt2, name: " Denot Acheiver", posts: 5 },
  { id: 3, avatar: avt3, name: " connetErnest ", posts: 0 },
  { id: 4, avatar: avt4, name: "Erlest clasterr", posts: 1 },
];
const Author = () => {
  const [authors, setAuthors] = useState(authorData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author_avatar">
                  <img src={avatar} alt={`Image of the ${name}`} />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>{posts} posts</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No authors Found.</h2>
      )}
    </section>
  );
};

export default Author;
