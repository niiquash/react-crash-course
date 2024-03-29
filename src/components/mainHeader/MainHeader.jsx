import styles from "./MainHeader.module.css";
import { MdPostAdd, MdMessage, MdOutlineMessage } from "react-icons/md";
const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Posts
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
