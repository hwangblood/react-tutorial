import { React, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { format } from "date-fns";

import api from "./api/posts";
import DataContext from "./context/DataContext";
import PostNotFound from "./PostNotFound";

const EditPost = () => {
  // To edit a post
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const history = useHistory();
  const { posts, setPosts } = useContext(DataContext);

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <main className="PostEditor">
      {editTitle && (
        <>
          <h2>EditPost</h2>
          <form className="postForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="body">Title:</label>
            <textarea
              type="text"
              name="body"
              id="body"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && <PostNotFound />}
    </main>
  );
};

export default EditPost;
