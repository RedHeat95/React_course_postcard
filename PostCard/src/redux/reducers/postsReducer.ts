import { ACTIONS } from "../constants";

export interface IPost {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
  onClick?: () => void;
}

export interface IPostsState {
  posts: IPost[];
  post: IPost;
  count: number;
  offset: number;
}

const defaultState: IPostsState = {
  posts: [],
  post: {
    id: 0,
    image: "",
    title: "",
    text: "",
    date: "",
  },
  count: 0,
  offset: 0,
};

export const postsReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POSTS) {
    return {
      ...state,
      posts: action.posts,
      count: action.count,
      offset: action.offset,
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
      post: { id: 0, image: "", text: "", date: "", title: "" },
    };
  }

  return state;
};
