import { AuthActions } from './../actions/auth';
import { AuthActionTypes } from '../actions/auth';

export interface authState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  token: string | null;
}

const initialState: authState = {
  isLoggedIn: false,
  isAdmin: false,
  token: null,
};

export const authReducer = (state: authState = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      break;
    case AuthActionTypes.SET_ADMIN_ROLE:
      return {
        ...state,
        isAdmin: true,
      };
      break;
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
      break;
    case AuthActionTypes.SET_TOKEN:
      return initialState;
      break;
    default:
      return state
      break;
  }
};
