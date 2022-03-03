import { Dispatch } from "redux";

import { IState } from "../store";
import { ACTIONS } from "../constants";

interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = ({ username, email, password }: IRegisterData) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const result = await response.json();

      if (response.ok === false) {
        throw result;
      }

      if (response.ok) {
        dispatch(registerSuccess(result));
      }
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
