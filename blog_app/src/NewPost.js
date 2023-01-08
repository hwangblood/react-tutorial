import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

import api from "./api/posts";
import DataContext from "./context/DataContext";

const NewPost = () => {
  // To create a new post
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const { posts, setPosts } = useContext(DataContext);

  const history = useHistory();

  // Handle new post action
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);

      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <main className="PostEditor">
      <h2>NewPost</h2>

      <form className="postForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="body">Title:</label>
        <textarea
          type="text"
          name="body"
          id="body"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
