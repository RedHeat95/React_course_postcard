import { useContext } from "react";

import styles from "./PostItem.module.css";
import { Context } from "../../../App";
import { IPost } from "../../../redux/reducers/postsReducer";

export function PostCard({ id, image, title, text, date }: IPost) {
  const { isDark } = useContext(Context);
  return (
    <div
      key={id}
      className={isDark ? `${styles.wrapperDark}` : `${styles.wrapper}`}
    >
      <img className={styles.img} src={image} />
      <div>
        <h1 className={isDark ? `${styles.titleDark}` : `${styles.title}`}>
          {title}
        </h1>
        <p className={isDark ? `${styles.textDark}` : `${styles.text}`}>
          {text}
        </p>
        <p className={isDark ? `${styles.dateDark}` : `${styles.date}`}>
          {date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
}
