import { Dispatch } from "redux";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postsReducer";

export const addPosts = (posts: IPost[]) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
  };
};

export function fetchPosts() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=100`
    );
    const result = await response.json();
    dispatch(addPosts(result.results));
  };
}

export const addPost = (post: any) => {
  return {
    type: ACTIONS.ADD_POST,
    post: post,
  };
};

export function fetchPost(postId: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + postId
    );
    const post = await response.json();
    dispatch(addPost(post));
  };
}

export function deletePost() {
  return { type: ACTIONS.DELETE_POST };
}
