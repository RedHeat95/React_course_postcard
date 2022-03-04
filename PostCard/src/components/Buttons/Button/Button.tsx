import { useContext } from "react";

import styles from "./Button.module.css";
import { Context } from "../../../App";

interface IBtn {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IBtn) => {
  const { theme } = useContext(Context);
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
