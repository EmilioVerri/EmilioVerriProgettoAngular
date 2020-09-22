import { createAction, props } from '@ngrx/store';
import {Shop } from '../../core/model/shop.interface';

export const initShops = createAction('[Shops] init', props<{shops: Shop[]}>());
export const insertShop = createAction('[Shops] insert', props<{shop: Shop}>());
export const removeShop = createAction('[Shops] remove', props<{id: number}>());
export const editShop = createAction('[Shops] edit', props<{shop: Shop}>());
export const retrieveAllShops =  createAction('[Shops] retrieve all');
export const updateShop = createAction('[Shop] update', props<{shop: Shop}>());
export const postShop = createAction('[Shop] add to server', props<{shop: Shop}>());