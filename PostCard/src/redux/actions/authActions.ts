import { Dispatch } from "redux";

import { IState } from "../store";
import { ACTIONS } from "../constants";
import { registerUser, loginUser, getProfile } from "../../services/auth";

interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = ({ username, email, password }: IRegisterData) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await registerUser(username, email, password);

      dispatch(registerSuccess(result));
    } catch (error: any) {
      dispatch(registerFailure(error));
    }
  };
};

const registerFailure = (error: any) => {
  return {
    type: ACTIONS.REGISTER_FAILURE,
    error: error,
  };
};

interface IProfile {
  id: number;
  username: string;
  email: string;
}

const registerSuccess = (profile: IProfile) => {
  return {
    type: ACTIONS.REGISTER_SUCCESS,
    ...profile,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { access, refresh } = await loginUser(email, password);
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      const profile = await getProfile();
      dispatch(loginSuccess(profile));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};

const loginSuccess = (profile: IProfile) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    ...profile,
  };
};
