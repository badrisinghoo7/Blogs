import React, { useState } from "react";
import PostItem from "./PostItem";
import pic1 from "../images/blog20.jpg";
import pic2 from "../images/blog7.jpg";
import pic3 from "../images/blog10.jpg";

const Dummy_data = [
  {
    category: "Agriculture",
    id: 1,
    thumbnail: pic1,
    title: "Composting for Beginners: Turning Waste into Riches",
    description: "Learn how to create nutrient-rich compost for your garden.",
    authorID: 1,
  },
  {
    category: "Agriculture",
    id: 2,
    thumbnail: pic2,
    title: "Essential Farm Equipment for Small Holdings",
    description:
      "Discover tools and machinery to make your farming tasks easier.",
    authorID: 1,
  },
  {
    category: "Agriculture",
    id: 3,
    thumbnail: pic3,
    title: "The Buzz on Beekeeping: A Beginner's Guide",
    description:
      "Explore the fascinating world of honeybees and learn how to start your own hive.",
    authorID: 1,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(Dummy_data);
  return (
    <section className="posts">
      <div className="container posts_container">
        {posts.map((item) => {
          return <PostItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Posts;
