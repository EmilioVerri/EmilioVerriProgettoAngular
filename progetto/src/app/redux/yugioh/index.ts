  
import { Params } from '@angular/router';
import { createSelector, props } from '@ngrx/store';
import { distinct } from 'rxjs/operators';
import { Yugioh } from 'src/app/core/model/Yu-Gi-Oh!';



import { AppState } from '..';
import { selectRouteParams } from '../router';

import { YugiohState } from './yugioh.reducers';

export const selectYugiohState = (state: AppState) => state.yugiohState;

export const selectYugioh = createSelector(
    selectYugiohState,
    (state: YugiohState) => state.yugioh
);

export const selectYugiohByBrand = createSelector(
    selectYugiohState,
    selectRouteParams,
    (state: YugiohState, params: Params)=> {
        return state.yugioh.find(yugioh => yugioh.brand === (params['brand']));
    }
);

export const getCurrentNavigatedYugioh = createSelector(
    selectYugiohState,
    selectRouteParams,
    (state: YugiohState, params: Params) => state.yugioh.find(item => item.id === Number(params['id']))
);