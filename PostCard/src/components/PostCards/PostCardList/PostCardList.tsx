import styles from "./PostCardList.module.css";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IPostCard, PostCard } from "../PostCardItem/PostItem";
import { Button } from "../../Buttons/Button";

const LIMIT = 5;

export const PostCards = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result) => {
        setPosts([...posts, ...result.results]);
      });
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  const history = useHistory();

  return (
    <div>
      <div className={styles.wrapper}>
        {posts.map((item: IPostCard) => (
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
        <Button text="Show more" onClick={loadMore} />
      </div>
    </div>
  );
};
