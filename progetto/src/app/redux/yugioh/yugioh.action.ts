import { createAction, props } from '@ngrx/store';
import { Yugioh } from 'src/app/core/model/Yu-Gi-Oh!';

//prendi tutti i prodotti
export const retrieveAllProducts = createAction('[Yugioh] tutti i modelli');
export const initProduct = createAction('[Yugioh] yugioh', props<{yugioh: Yugioh[]}>());