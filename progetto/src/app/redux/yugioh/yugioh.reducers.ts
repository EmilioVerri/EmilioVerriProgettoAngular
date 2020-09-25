import { Action, createReducer, on } from '@ngrx/store';
import { Yugioh } from 'src/app/core/model/Yu-Gi-Oh!';
import { initProduct } from './yugioh.action';

export interface YugiohState {
    yugioh: Yugioh[];
}

export const initialState: YugiohState = {

    yugioh: JSON.parse(sessionStorage.getItem("yugioh"))
};

export const yugiohReducer = createReducer(
    initialState,
    on(initProduct, (state, { yugioh }) => ( { ...state, yugioh: yugioh } )),
);

export function reducer(state: YugiohState | undefined, action: Action) {
    return yugiohReducer(state, action);
}