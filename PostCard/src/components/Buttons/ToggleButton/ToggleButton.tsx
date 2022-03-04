import { useContext } from "react";

import styles from "./Button.module.css";
import { Context } from "../../../App";

interface IBtnTogle {
  onClick: () => void;
}

export const ToggleButton = ({ onClick }: IBtnTogle) => {
  const { isDark } = useContext(Context);

  return (
    <label className={styles.switch}>
      <input type="checkbox" onClick={onClick} />
      <span
        className={
          isDark
            ? `${styles.round} ${styles.sliderLeft}`
            : `${styles.round} ${styles.slider}`
        }
      ></span>
    </label>
  );
};
