
import { TodoState, todoReducer } from './todos/todos.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { authReducer, UserState } from './autenticazione/autenticazione.reducers';

export interface AppState {
    todoState: TodoState;

    router: RouterReducerState<any>;
    authState: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
    todoState: todoReducer,
    router: routerReducer,
    authState: authReducer,
};


export const selectUserState = (state: AppState) => state.authState;
