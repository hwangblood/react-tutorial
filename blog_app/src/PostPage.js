import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

import PostNotFound from "./PostNotFound";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);

  const post = getPostById(id);
  const handleDelete = (id) => {
    deletePost(id);
    navigate("/");
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postDate">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </>
        )}

        {!post && <PostNotFound />}
      </article>
    </main>
  );
};

export default PostPage;
