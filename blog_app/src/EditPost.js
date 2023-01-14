import { React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

import { useStoreState, useStoreActions } from "easy-peasy";

import PostNotFound from "./PostNotFound";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // To edit a post
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const getPostById = useStoreState((state) => state.getPostById);

  const post = getPostById(id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`);
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
            <button type="button" onClick={() => handleEdit(post.id)}>
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
