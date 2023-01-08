import React, { useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";
import PostNotFound from "./PostNotFound";
import api from "./api/posts";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const history = useHistory();

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
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
