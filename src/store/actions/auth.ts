import {Action} from '@ngrx/store'

export enum AuthActionTypes {
  LOGIN = '[Auth] Set Login',
  LOGOUT = '[Auth] Set Logout',
  SET_TOKEN = '[Auth] Set Token',
  SET_ADMIN_ROLE = '[Auth] Set Admin Role'
}

export class SetAdminRole implements Action{
  readonly type = AuthActionTypes.SET_ADMIN_ROLE
}

export class SetToken implements Action{
  readonly type = AuthActionTypes.SET_TOKEN
  constructor(public payload: string){}
}

export class Login implements Action{
  readonly type = AuthActionTypes.LOGIN
}

export class Logout implements Action{
  readonly type = AuthActionTypes.LOGOUT
}

export type AuthActions = SetToken | SetAdminRole | Login | Logout
