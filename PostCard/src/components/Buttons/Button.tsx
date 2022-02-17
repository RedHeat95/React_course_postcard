import styles from "./Button.module.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";

interface IBtn {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IBtn) => {
  return (
    <div>
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
  const contextValue = useContext(Context);
  const { isDark } = useContext(Context);
  {
    /* <label className={isDark ? `${styles.switch}` : `${styles.switchDark}`}></label> */
  }
  return (
    <label className={isDark ? styles.switchw : styles.switch}>
      <input type="checkbox" onClick={onClick} />
      <span className={isDark ? styles.sliderw : styles.slider}></span>
    </label>
  );
};
