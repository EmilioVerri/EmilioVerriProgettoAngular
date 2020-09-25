import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { createSelector, ActionReducerMap } from '@ngrx/store';
import { Yugioh } from '../core/model/Yu-Gi-Oh!';
import { selectCartState } from './cart';
import { cartReducer, CartState } from './cart/cart.reducers';


import { UsersState, usersReducer } from './users/login.reducers';
import { yugiohReducer, YugiohState } from './yugioh/yugioh.reducers';

export interface AppState {
    cartState: CartState;
    usersState: UsersState;
    yugiohState: YugiohState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
    yugiohState: yugiohReducer,
    router: routerReducer,
    cartState: cartReducer,
    
};