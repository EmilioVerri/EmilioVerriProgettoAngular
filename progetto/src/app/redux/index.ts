
import { ShopState, shopReducer } from './shops/shops.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { authReducer, UserState } from './autenticazione/autenticazione.reducers';

export interface AppState {
    shopState: ShopState;

    router: RouterReducerState<any>;
    authState: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
    shopState: shopReducer,
    router: routerReducer,
    authState: authReducer,
};


export const selectUserState = (state: AppState) => state.authState;
