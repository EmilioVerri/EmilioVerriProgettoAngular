import { createAction, props } from '@ngrx/store';

export const goToShopsHome = createAction('[Shops - Navigation] shops home');
export const goToDetail = createAction('[Shops - Navigation] detail', props<{id: number}>());
export const goToEdit = createAction('[Shops - Navigation] edit', props<{id: number}>());