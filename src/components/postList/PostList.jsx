import styles from "./PostList.module.css";
import Post from "../post/Post";
import NewPost from "../newPost/NewPost";
import { useState } from "react";

const PostList = () => {
  const [userText, setUserText] = useState("");
  const [author, setAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setUserText(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };
  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAutorChange={changeAuthorHandler}
        />
      </Modal>
      <ul className={styles.posts}>
        <Post author={author} body={userText} />
        <Post author="Paola" body="I need new eye liners" />
        <Post author="Alma" body="J'ai faime" />
        <Post author="Aaron" body="I'm super smart" />
      </ul>
    </>
  );
};

export default PostList;