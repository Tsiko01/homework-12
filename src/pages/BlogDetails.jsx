import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

export default function BlogDetails() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  const blog = blogs.find((item) => item.id == id);

  return (
    <div className="div_2">
      <h1 className="h_1">{blog.title}</h1>
      <p className="p_2">{blog.description}</p>
    </div>
  );
}