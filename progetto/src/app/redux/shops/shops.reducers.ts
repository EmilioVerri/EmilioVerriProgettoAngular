import { Action, createReducer, on } from '@ngrx/store';
import { Shop } from '../../core/model/shop.interface';
import { initShops, insertShop, removeShop, editShop } from './shops.actions';

export interface ShopState {
    shops: Shop[];
    
}

export const initialState: ShopState = {
    shops: []
};

const shopsReducerFun = createReducer(
    initialState,
    on(initShops, (state, { shops }) => ({ ...state, shops: shops })),
    on(insertShop, (state, { shop }) => ({ ...state, shops: [...state.shops, shop] })),
    on(removeShop, (state, { id }) => ({ ...state, shops: state.shops.filter(item => item.id !== id) })),
    on(editShop, (state, { shop }) => ({ ...state, shops: state.shops.map(item => item.id === shop.id ? shop : item) }))
);

export function shopReducer(state: ShopState | undefined, action: Action) {
    return shopsReducerFun(state, action);
}
