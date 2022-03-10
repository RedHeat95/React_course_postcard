import { useContext } from "react";

import styles from "./Button.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

interface IBtn {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IBtn) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={styles.btn}
        style={{ background: theme.button, color: theme.buttonColor }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
