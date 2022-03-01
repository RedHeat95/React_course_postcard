import { ACTIONS } from "../constants";

export interface IPost {
  id: string;
  image: string;
  title: string;
  text: string;
  date: string;
}

export interface IPostsState {
  posts: IPost[];
  post: IPost;
}

const defaultState: IPostsState = {
  posts: [],
  post: {
    id: "",
    image: "",
    title: "",
    text: "",
    date: "",
  },
};

export const postsReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POSTS) {
    return {
      ...state,
      posts: action.posts,
    };
  }

  if (action.type === ACTIONS.ADD_POST) {
    return {
      ...state,
      post: action.post,
    };
  }

  if (action.type === ACTIONS.DELETE_POST) {
    return {
      ...state,
      post: { id: "", image: "", text: "", date: "", title: "" },
    };
  }

  return state;
};
