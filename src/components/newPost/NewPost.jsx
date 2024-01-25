import styles from "./NewPost.module.css";

const NewPost = ({ onBodyChange, onAutorChange }) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAutorChange} />
      </p>
    </form>
  );
};

export default NewPost;
