import styles from "./PostCard.module.css";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IPostCard, PostCard } from "../PostCardItem/PostItem";
import { Button } from "../../Buttons/Button";

interface IPostCardWithId extends IPostCard {
  postId: string;
}

export const Post = () => {
  const params: IPostCardWithId = useParams();

  const [post, setPost] = useState<IPostCardWithId>();

  const history = useHistory();

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + params.postId
    );
    const post = await res.json();
    console.log(post);

    setPost(post);
  };

  return post ? (
    <div>
      <div className={styles.wrapper}>
        <PostCard
          id={post.id}
          image={post.image}
          title={post.title}
          text={post.text}
          date={post.date}
        />
      </div>
      <div className={styles.showMore}>
        <Button text="Back" onClick={() => history.goBack()} />
      </div>
    </div>
  ) : null;
};
