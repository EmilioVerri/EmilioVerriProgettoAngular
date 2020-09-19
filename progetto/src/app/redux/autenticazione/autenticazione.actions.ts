import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';


export const initUser  = createAction('[User] init',  props<{user: User}>());
export const loginUser = createAction('[Auth] Login',  props<{email: string, password: string}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());
export const signUpUser = createAction('[Auth] signUp', props<{email: string, password: string, nome: string, cognome: string}>());
export const signUpUserSuccess = createAction('[Auth] signUp Success', props<{user: User}>());