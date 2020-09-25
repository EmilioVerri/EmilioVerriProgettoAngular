import { createAction, props } from '@ngrx/store';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';

export const retrieveAllCart = createAction('[Cart] retrieve all');
export const initCart = createAction('[Cart] init', props<{customYugioh: CustomYugioh[]}>());

export const addItem = createAction('[Cart] add item', props<{customYugioh: CustomYugioh}>());
export const addItemSuccess = createAction('[Cart] add item success', props<{customYugioh: CustomYugioh}>());

export const removeItem = createAction('[Cart] remove item', props<{id: number}>());
export const removeItemSuccess = createAction('[Cart] remove item', props<{id: number}>());
// export const removeItem = createAction('[Cart] remove item', props<{userId: number, customProduct: CustomProduct}>());
// export const removeItemSuccess = createAction('[Cart] remove item', props<{userId: number, customProduct: CustomProduct}>());

export const removeAllItem = createAction('[Cart] remove all item');