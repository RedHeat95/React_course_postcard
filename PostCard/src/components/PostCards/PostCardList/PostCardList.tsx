import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState, store } from "../../../redux/store";
import {
  fetchPosts,
  searchPosts,
  fetchMorePosts,
} from "../../../redux/actions/postsActions";
import { IPost } from "../../../redux/reducers/postsReducer";

import styles from "./PostCardList.module.css";
import { Container } from "../../Container/Container";
import { Title } from "../../Title/Title";
import { Button } from "../../Buttons/Button/Button";
import { Input } from "../../Input/Input";

import { PostCard } from "../PostCardItem/PostItem";

function debounce(fun: (text: string) => void, ms: number) {
  let isCooldown = false;
  let prevSearchText = "";

  return function (searchText: string) {
    prevSearchText = searchText;

    if (isCooldown) {
      return;
    }

    fun(searchText);
    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;

      if (prevSearchText !== searchText) {
        fun(prevSearchText);
      }
    }, ms);
  };
}

const delayedSearch = debounce(
  (text: string) => store.dispatch(searchPosts(text)),
  500
);

export const PostCards = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const posts = useSelector((state: IState) => state.postsReducer.posts);
  const count = useSelector((state: IState) => state.postsReducer.count);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const loadMore = useCallback(() => {
    dispatch(fetchMorePosts());
  }, []);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);

      delayedSearch(event.target.value);
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

  return (
    <Container>
      <div className={styles.title}>
        <div className={styles.titleWithBtn}>
          <Title text="All posts" />
          <Button text="+ Add" onClick={() => {}} />
        </div>

        <div className={styles.search}>
          <Title text="Search" />
          <Input value={search} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
      </div>

      {posts.length ? (
        <>
          <div className={styles.allPosts}>
            {posts.map((item) => (
              <PostCard
                key={item.id + Math.random().toString(16).slice(2)}
                id={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                date={item.date}
                onClick={() => {
                  history.push("/post/" + item.id);
                }}
              />
            ))}
          </div>

          <div className={styles.showMore}>
            {posts.length !== count ? (
              <Button
                text="Show more"
                onClick={() => {
                  loadMore();
                }}
              />
            ) : null}
          </div>
        </>
      ) : (
        <Title text="NO posts..." />
      )}
    </Container>
  );
};
