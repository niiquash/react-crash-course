import MainHeader from "./components/mainHeader/MainHeader";
import PostList from "./components/postList/PostList";
import { useState } from "react";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  const showModalHandler = () => {
    setModalVisibility(true);
  };

  const closeModalHandler = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          modalVisibility={modalVisibility}
          onCloseModal={closeModalHandler}
        />
      </main>
    </>
  );
}

export default App;
