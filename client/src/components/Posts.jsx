import React, { useState } from 'react';





const Dummy_data = [
  {
    "category": "Agriculture",
    "id": 1,
    "thumbnail": "https://example.com/farm1.jpg",
    "title": "Composting for Beginners: Turning Waste into Riches",
    "description": "Learn how to create nutrient-rich compost for your garden.",
    "authorID": 1
  },
  {
    "category": "Agriculture",
    "id": 2,
    "thumbnail": "https://example.com/tractor2.jpg",
    "title": "Essential Farm Equipment for Small Holdings",
    "description": "Discover tools and machinery to make your farming tasks easier.",
    "authorID": 1
  },
  {
    "category": "Agriculture",
    "id": 3,
    "thumbnail": "https://example.com/bee3.jpg",
    "title": "The Buzz on Beekeeping: A Beginner's Guide",
    "description": "Explore the fascinating world of honeybees and learn how to start your own hive.",
    "authorID": 1
  },
]

const Posts = () => {
    
    const [posts,setPosts] = useState([]);
  return (
    <div>
      
    </div>
  );
}

export default Posts;
