import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { blogs } = useContext(BlogContext);

  return (
  <div className="home-page">
    <h1>Blogs</h1>

    <Link to="/create">Create Blog</Link>

    {blogs.map((blog) => (
      <div className="div_1" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>

        <Link className="more" to={`/blog/${blog.id}`}>
          Read More
        </Link>
      </div>
    ))}
  </div>
);
}