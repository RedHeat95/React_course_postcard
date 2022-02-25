import { ChangeEvent } from "react";
import styles from "./Search.module.css";

interface IProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Search = ({ search, setSearch }: IProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.searchPosts}>
      <p className={styles.searchTitle}>Search</p>
      <input
        className={styles.searchInput}
        value={search}
        onChange={onChange}
      />
    </div>
  );
};
