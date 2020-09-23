
import { ShopState, shopReducer } from './shops/shops.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { authReducer, UserState } from './autenticazione/autenticazione.reducers';

export interface AppState {// nell'appstate che è l'index.ts esterno allo shops
    shopState: ShopState;//definisco shopState che sarà interfaccia dentro reducer

    router: RouterReducerState<any>;
    authState: UserState;//definisco authState che è l'interfaccia che ci sarà dentro autenticazione.reducer
}

export const reducers: ActionReducerMap<AppState> = {//definizione reducer
    shopState: shopReducer,
    router: routerReducer,
    authState: authReducer,
};


export const selectUserState = (state: AppState) => state.authState;// per il richiamo dell'user
