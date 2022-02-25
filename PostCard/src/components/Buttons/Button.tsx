import { useContext } from "react";

import styles from "./Button.module.css";
import { Context } from "../../App";
interface IBtn {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IBtn) => {
  return (
    <div className={styles.btnWrraper}>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

interface IBtnTogle {
  onClick: () => void;
}

export const ButtonTogle = ({ onClick }: IBtnTogle) => {
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
