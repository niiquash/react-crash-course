import styles from "./PostList.module.css";
import Post from "../post/Post";
import NewPost from "../newPost/NewPost";
import Modal from "../modal/Modal";
import { useState } from "react";

const PostList = ({ modalVisibility, onCloseModal }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((exisitingPosts) => [postData, ...exisitingPosts]);
  };
  return (
    <>
      {modalVisibility && (
        <Modal closeModal={onCloseModal}>
          <NewPost onCancel={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding posts</p>
        </div>
      )}
    </>
  );
};

export default PostList;
