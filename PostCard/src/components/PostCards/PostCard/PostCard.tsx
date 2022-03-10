import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../../redux/store";
import { deletePost, fetchPost } from "../../../redux/actions/postsActions";

import styles from "./PostCard.module.css";
import { Container } from "../../Container/Container";
import { Title } from "../../Title/Title";
import { PostCard } from "../PostCardItem/PostItem";
import { Button } from "../../Buttons/Button/Button";
import { Preloader } from "../../Preloader/Preloader";

export const Post = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params: { postId: string } = useParams();

  const post = useSelector((state: IState) => state.postsReducer.post);

  useEffect(() => {
    dispatch(fetchPost(params.postId));

    return () => {
      dispatch(deletePost());
    };
  }, []);

  return post.title ? (
    <Container isImage={false}>
      <Title text="Selected post" />
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
    </Container>
  ) : (
    <Preloader />
  );
};
