import styles from "./Modal.module.css";

const Modal = ({ children, closeModal }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
