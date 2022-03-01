import { ChangeEventHandler, KeyboardEventHandler } from "react";

import styles from "./Search.module.css";

interface IProps {
  value: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const Search = ({
  value,
  type = "text",
  onChange,
  onKeyDown,
}: IProps) => {
  return (
    <div className={styles.searchPosts}>
      <p className={styles.searchTitle}>Search</p>
      <input
        className={styles.searchInput}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
