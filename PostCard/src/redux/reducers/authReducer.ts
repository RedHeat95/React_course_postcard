import { ACTIONS } from "../constants";

export interface IAuthState {
  error: any;
  id: number;
  username: string;
  email: string;
  isLoggedIn: boolean;
}

const defaultState: IAuthState = {
  error: null,
  id: 0,
  username: "",
  email: "",
  isLoggedIn: false,
};

export const authReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.REGISTER_FAILURE) {
    return { ...state, error: action.error };
  }

  if (action.type === ACTIONS.REGISTER_SUCCESS) {
    return {
      ...state,
      error: null,
      id: action.id,
      username: action.username,
      email: action.email,
    };
  }

  if (action.type === ACTIONS.LOGIN_SUCCESS) {
    return {
      ...state,
      error: null,
      id: action.id,
      username: action.username,
      email: action.email,
      isLoggedIn: true,
    };
  }
  return state;
};
