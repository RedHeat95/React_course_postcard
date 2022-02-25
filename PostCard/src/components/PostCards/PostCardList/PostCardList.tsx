import { ChangeEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../../redux/store";
import { fetchPosts } from "../../../redux/actions/postsActions";
import { IPost } from "../../../redux/reducers/postsReducer";

import styles from "./PostCardList.module.css";
import { PostCard } from "../PostCardItem/PostItem";
import { Search } from "../../Search/Search";
import { Button } from "../../Buttons/Button";

const LIMIT = 4;

export const PostCards = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const history = useHistory();

  const posts = useSelector((state: IState) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const [search, setSearch] = useState("");

  const newEmojies = posts.filter((post) => {
    if (post.title.toLowerCase().includes(search.toLowerCase())) {
      return post;
    }
  });

  const postsSliced = newEmojies.slice(0, LIMIT * page);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.titleBtn}>
          <p className={styles.allPostsTitle}>All posts</p>
          <Button text="+ Add" onClick={() => {}} />
        </div>
        <Search search={search} setSearch={setSearch} />
      </div>
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
    </div>
  );
};
