import { ChangeEventHandler, KeyboardEventHandler } from "react";

import styles from "./Input.module.css";

interface IProps {
  value: string;
  text?: string;
  type?: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const Input = ({
  value,
  text,
  type = "text",
  error,
  onChange,
  onKeyDown,
}: IProps) => {
  return (
    <div className={styles.inputBox}>
      <p className={styles.inputName}>{text}</p>

      <input
        className={`${styles.input} ${error ? styles.error : ""} `}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {error ? <p>{error}</p> : null}
    </div>
  );
};
