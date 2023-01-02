import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostNotFound from "./PostNotFound";

const EditPost = ({
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [posts, setEditTitle, setEditBody]);

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
