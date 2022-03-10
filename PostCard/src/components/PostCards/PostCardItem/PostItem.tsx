import { useContext } from "react";

import styles from "./PostItem.module.css";
import { IPost } from "../../../redux/reducers/postsReducer";
import { ThemeContext } from "../../../context/ThemeContext";

interface IProps extends IPost {
  onClick?: () => void;
}

export function PostCard({ id, image, title, text, date, onClick }: IProps) {
  const { theme } = useContext(ThemeContext);
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
