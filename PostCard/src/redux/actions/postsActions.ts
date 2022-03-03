import { Dispatch } from "redux";

import { IState } from "../store";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postsReducer";

export const addPosts = (posts: IPost[], count: number, offset: number = 0) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
    count,
    offset,
  };
};

const LIMIT = 5;

export const fetchPosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset },
    } = getState();

    if (offset === 0) {
      const response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${0}`
      );

      const result = await response.json();

      dispatch(addPosts(result.results, result.count));
    }
  };
};

export const fetchMorePosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset, posts },
    } = getState();

    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${
        offset + LIMIT
      }`
    );

    const result = await response.json();

    dispatch(
      addPosts([...posts, ...result.results], result.count, offset + LIMIT)
    );
  };
};

export const addPost = (post: any) => {
  return {
    type: ACTIONS.ADD_POST,
    post: post,
  };
};

export function fetchPost(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + id
    );
    const post = await response.json();

    dispatch(addPost(post));
  };
}

export function deletePost() {
  return { type: ACTIONS.DELETE_POST };
}

export const searchPosts = (search: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=100`
    );

    const result = await response.json();

    dispatch(addPosts(result.results, result.count));
  };
};
