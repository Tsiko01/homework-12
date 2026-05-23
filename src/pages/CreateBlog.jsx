import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const { addBlog, blogs } = useContext(BlogContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: blogs.length + 1,
      title,
      description,
    };

    addBlog(newBlog);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <br />

      <button>Add Blog</button>
    </form>
  );
}