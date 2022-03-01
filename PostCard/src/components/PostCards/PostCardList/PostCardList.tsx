import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState, store } from "../../../redux/store";
import { fetchPosts, searchPosts } from "../../../redux/actions/postsActions";
import { IPost } from "../../../redux/reducers/postsReducer";

import styles from "./PostCardList.module.css";
import { PostCard } from "../PostCardItem/PostItem";
import { Search } from "../../Search/Search";
import { Button } from "../../Buttons/Button";
import { idText } from "typescript";

const LIMIT = 4;

function debounce(fun: (text: string) => void, ms: number) {
  let isCooldown = false;

  return function (searchText: string) {
    if (isCooldown) {
      return;
    }

    fun(searchText);
    isCooldown = true;
    console.log(searchText, isCooldown);
    setTimeout(() => {
      isCooldown = false;
      console.log("isCooldown", isCooldown);
    }, ms);
  };
}

const delayedSearch = debounce(
  (text: string) => store.dispatch(searchPosts(text)),
  1000
);

export const PostCards = () => {
  const [offset, setOffset] = useState(1);
  const [search, setSearch] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);
  // const [page, setPage] = useState(1);

  const posts = useSelector((state: IState) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [offset]);

  useEffect(() => {
    delayedSearch(search);
  }, [search]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        dispatch(searchPosts(search));
      }
    },
    [search]
  );

  const postsSliced = posts.slice(0, LIMIT * offset);

  const showMore = useCallback(() => {
    setOffset(offset + 1);
  }, [posts]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.titleBtn}>
          <p className={styles.allPostsTitle}>All posts</p>
          <Button text="+ Add" onClick={() => {}} />
        </div>
        <Search value={search} onChange={onChange} onKeyDown={onKeyDown} />
      </div>
      {posts ? (
        <>
          <div className={styles.allPosts}>
            {postsSliced.map((item: IPost) => (
              <div
                key={item.id}
                onClick={() => {
                  history.push("/post/" + item.id);
                }}
              >
                <PostCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                />
              </div>
            ))}
          </div>

          <div className={styles.showMore}>
            <Button text="Show more" onClick={showMore} />
          </div>
        </>
      ) : (
        <div>
          <h1>NO posts...</h1>
        </div>
      )}
    </div>
  );
};
