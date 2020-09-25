import { Action, createReducer, on } from '@ngrx/store';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';

import { addItem, addItemSuccess, initCart, removeAllItem, removeItem, removeItemSuccess } from './cart.action';

export interface CartState {
    cart: CustomYugioh[];
}

export const initialState: CartState = {
    cart: []
};

export const cartReducer = createReducer(
    initialState,
    on(initCart, (state, { customYugioh }) => ({ ...state, cart:  customYugioh})),
    on(addItem, (state, {customYugioh}) => ({...state, products:[...state.cart, customYugioh]})),
    on(removeItem,(state, {id}) => ({ ...state, products:state.cart.filter(item=>item.yugioh.id !== id) })),
    on(removeAllItem, (state) => ({...state, cart: []})),
);

export function reducer(state: CartState, action: Action) {
    return cartReducer(state, action);
}
