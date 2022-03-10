import { useContext } from "react";

import styles from "./Title.module.css";
import { ThemeContext } from "../../context/ThemeContext";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  const { theme } = useContext(ThemeContext);

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
