import { useState } from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ onCancel, onAddPost }) => {
  const [userText, setUserText] = useState("");
  const [author, setAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setUserText(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: userText,
      author: author,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
