import { useState } from "react";
import styles from "./LikeButton.module.scss";

export default function LikeButton(props) {
  const [isSaved, setIsSaved] = useState(props.isSaved);

  const handleClickButton = () => {
    setIsSaved(!isSaved);
    props.handleClick();
  };

  const buttonLabel = isSaved ? "Saved" : "Save";

  return (
    <button
      type="button"
      className={`${styles.likeButton} ${isSaved ? styles.selected : ""}`}
      onClick={handleClickButton}
    >
      <svg className={styles.heartIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z" />
      </svg>
      {buttonLabel}
    </button>
  );
}
