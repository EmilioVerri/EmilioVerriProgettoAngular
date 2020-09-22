
import { goToShopsHome } from '../../features/shops/redux/shops-navigation.actions';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveAllShops, initShops, updateShop, editShop, postShop, insertShop } from './shops.actions';
import { switchMap, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { Shop } from 'src/app/core/model/shop.interface';
import { goToDetail } from 'src/app/features/shops/redux/shops-navigation.actions';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { initUser } from '../autenticazione/autenticazione.actions';

@Injectable()
export class ShopsEffects {

    retrieveAllShops$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllShops),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Shop[]>("shops").pipe(
            map(shops => initShops({ shops }))
        ))
    ));

    updateShop$ = createEffect(() => this.actions$.pipe(
        ofType(updateShop),
        switchMap(action => this.httpCommunicationsService.retrievePutCall<Shop>("shops/" + action.shop.id, action.shop).pipe(
            switchMap(shop => [editShop({ shop }), goToDetail({ id: shop.id })])
        ))
    ));

   /* insertTodo$ = createEffect(() => this.actions$.pipe(
        ofType(postTodo),
        withLatestFrom(this.store.pipe(select(initUser))),
        map(([action, user]) => ({
            ...action.todo,
            users: [user.nome]
        })),
        switchMap(todo => this.httpCommunicationsService.retrievePostCall<Todo>("todos", todo).pipe(
            switchMap(todo => [insertTodo({ todo }), goToTodosHome()])
        ))
    ))*/


    constructor(private actions$: Actions, private store: Store,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}