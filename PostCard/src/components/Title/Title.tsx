import { useContext } from "react";

import styles from "./Title.module.css";
import { Context } from "../../App";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  const { theme } = useContext(Context);

  return (
    <p
      className={styles.title}
      style={{
        color: theme.timeText,
      }}
    >
      {text}
    </p>
  );
};
