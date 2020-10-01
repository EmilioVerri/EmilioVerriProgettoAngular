import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { createSelector, ActionReducerMap } from '@ngrx/store';
import { Yugioh } from '../core/model/Yu-Gi-Oh!';




import { UsersState, usersReducer } from './users/login.reducers';
import { yugiohReducer, YugiohState } from './yugioh/yugioh.reducers';

export interface AppState {
   
    usersState: UsersState;
    yugiohState: YugiohState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
    yugiohState: yugiohReducer,
    router: routerReducer,
   
    
};