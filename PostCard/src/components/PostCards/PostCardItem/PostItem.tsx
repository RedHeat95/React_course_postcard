import { useContext } from "react";

import styles from "./PostItem.module.css";
import { Context } from "../../../App";
import { IPost } from "../../../redux/reducers/postsReducer";

export function PostCard({ id, image, title, text, date, onClick }: IPost) {
  const { theme } = useContext(Context);
  return (
    <div
      className={styles.wrapper}
      style={{
        background: theme.colorOfCard,
      }}
      onClick={onClick}
    >
      <img className={styles.img} src={image} />
      <div>
        <h1
          className={styles.title}
          style={{
            color: theme.text,
          }}
        >
          {title}
        </h1>
        <p
          className={styles.text}
          style={{
            color: theme.grayText,
          }}
        >
          {text}
        </p>
        <p
          className={styles.date}
          style={{
            color: theme.timeText,
          }}
        >
          {date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
}
