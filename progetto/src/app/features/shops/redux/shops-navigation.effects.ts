import { ShopsFacadeService } from '../services/shops-facade.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { goToDetail, goToShopsHome } from './shops-navigation.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ShopsNavigationEffects {
    
    goToDetail$ = createEffect(() => this.actions$.pipe(
        ofType(goToDetail),
        tap(action => {
            this.shopsFacadeService.goToDetail(action.id);
        })
    ), { dispatch: false });

    goToShopsHome$ = createEffect(() => this.actions$.pipe(
        ofType(goToShopsHome),
        tap(() => {
            this.shopsFacadeService.goToShopsHome();
        })
    ), { dispatch: false });

    constructor(private actions$: Actions,
        private shopsFacadeService: ShopsFacadeService) {
    }
}