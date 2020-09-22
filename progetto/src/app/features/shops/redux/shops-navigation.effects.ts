import { ShopsFacadeService } from '../services/shops-facade.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { goToDetail, goToTodosHome } from './shops-navigation.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ShopsNavigationEffects {
    
    goToDetail$ = createEffect(() => this.actions$.pipe(
        ofType(goToDetail),
        tap(action => {
            this.todosFacadeService.goToDetail(action.id);
        })
    ), { dispatch: false });

    goToTodosHome$ = createEffect(() => this.actions$.pipe(
        ofType(goToTodosHome),
        tap(() => {
            this.todosFacadeService.goToTodosHome();
        })
    ), { dispatch: false });

    constructor(private actions$: Actions,
        private todosFacadeService: ShopsFacadeService) {
    }
}