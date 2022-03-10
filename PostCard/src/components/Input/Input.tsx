import { ChangeEventHandler, KeyboardEventHandler, useContext } from "react";

import styles from "./Input.module.css";
import { ThemeContext } from "../../context/ThemeContext";

interface IProps {
  value: string;
  type?: string;
  label?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const Input = ({
  type = "text",
  value,
  label,
  error,
  onChange,
  onKeyDown,
}: IProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <label className={styles.inputBox}>
      {label ? (
        <p className={styles.inputName} style={{ color: theme.text }}>
          {label}
        </p>
      ) : null}

      <input
        className={`${styles.input} ${error ? styles.error : ""} `}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {error ? <p>{error}</p> : null}
    </label>
  );
};
