import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { postsReducer, IPostsState } from "./reducers/postsReducer";
import { authReducer, IAuthState } from "./reducers/authReducer";

export interface IState {
  postsReducer: IPostsState;
  authReducer: IAuthState;
}

export const store = createStore(
  combineReducers({
    postsReducer,
    authReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
