import { useContext } from "react";
import styles from "./PostItem.module.css";
import { Context } from "../../../Context/Context";

export interface IPostCard {
  id: string;
  image: string;
  title: string;
  text: string;
  date: string;
}

export function PostCard({ id, image, title, text, date }: IPostCard) {
  const { isDark } = useContext(Context);
  return (
    <div
      key={id}
      className={isDark ? `${styles.wrapperDark}` : `${styles.wrapper}`}
    >
      <img className={styles.img} src={image} />
      <h1 className={isDark ? `${styles.titleDark}` : `${styles.title}`}>
        {title}
      </h1>
      <p className={isDark ? `${styles.textDark}` : `${styles.text}`}>{text}</p>
      <p className={isDark ? `${styles.dateDark}` : `${styles.date}`}>{date}</p>
    </div>
  );
}
