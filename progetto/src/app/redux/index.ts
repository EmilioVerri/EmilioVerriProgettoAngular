import { UsersState, usersReducer } from './users/users.reducers';
import { TodoState, todoReducer } from './todos/todos.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface AppState {
    todoState: TodoState;
    usersState: UsersState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    todoState: todoReducer,
    usersState: usersReducer,
    router: routerReducer
};
