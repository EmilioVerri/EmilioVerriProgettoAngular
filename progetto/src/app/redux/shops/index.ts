import { ShopState } from './shops.reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { Params } from '@angular/router';
import { selectRouteParams } from '../router';

export const selectShopsState = (state: AppState) => state.shopState;// va a fare riferimento nell'appState
export const selectShops = createSelector(
    selectShopsState,
    (state: ShopState) => state.shops
);

export const getShopById = createSelector(
    selectShopsState,
    (state: ShopState, props: { id: number }) => state.shops.find(item => item.id === props.id)
);

export const getCurrentNavigatedShop = createSelector(
    selectShopsState,//va a prendere la selectShopsState
    selectRouteParams,//va nell'index.ts della touter
    (state: ShopState, params: Params) => state.shops.find(item => item.id === Number(params['id']))//prende il parametro per id
);

export const getFirstShop = createSelector(
    selectShopsState,
    (state: ShopState) => state.shops.length > 0 ? state.shops[0] : null
);

