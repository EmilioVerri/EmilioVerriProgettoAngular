import {Action, createReducer, on} from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';

import {initUser, loginUserFailure} from './autenticazione.actions';

export interface UserState {
  user: User;
  // error message
  errorMessage: string | null;
}
export const initialState: UserState = {
  user: null,
  errorMessage: null,
};
export const authReducer = createReducer(
  initialState,
  on(initUser, (state, {user}) => ({ ...state, user, errorMessage: null })),
  on(loginUserFailure, (state, {error}) => ({...state, user: null, errorMessage: error})),
);
export function reducer(state: UserState | undefined, action: Action) {
  return authReducer(state, action);
}