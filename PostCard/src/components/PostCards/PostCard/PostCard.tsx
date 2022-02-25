import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../../redux/store";
import { IPost } from "../../../redux/reducers/postsReducer";
import { deletePost, fetchPost } from "../../../redux/actions/postsActions";

import styles from "./PostCard.module.css";
import { PostCard } from "../PostCardItem/PostItem";
import { Button } from "../../Buttons/Button";
import { Preloader } from "../../Preloader/Preloader";

export interface IPostCardWithId extends IPost {
  postId: string;
}

export const Post = () => {
  const params: IPostCardWithId = useParams();

  const post = useSelector((state: IState) => state.postsReducer.post);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPost(params.postId));

    return () => {
      dispatch(deletePost());
    };
  }, []);

  return post.title ? (
    <div className={styles.wrapper}>
      <h1 className={styles.selectPostTitle}>Selected post</h1>
      <div className={styles.selectPost}>
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
  ) : (
    <Preloader />
  );
};
