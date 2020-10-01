import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, filter, find } from 'rxjs/operators';

import { Action, select, Store } from '@ngrx/store';

import { addItem, addItemSuccess, initCart, removeItem, removeItemSuccess, retrieveAllCart } from './cart.action';
import { getCurrentUser } from '../users';
import { getCartProducts, selectCartState } from '.';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';

@Injectable()
export class CartEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private store: Store, private router: Router){}

    retreiveCart():Observable<CustomYugioh[]>{
        return this.http.retrieveGetCall<CustomYugioh[]>("cart")
    }

    getCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCart),
        withLatestFrom(this.store.pipe(select(getCurrentUser)), this.store.pipe(select(selectCartState))),
        switchMap(() => this.retreiveCart().pipe(
            map((customYugioh) => initCart({customYugioh}))
        ))
    ));

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addItem),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        switchMap(([action, user]) => this.http.retrievePostCall("cart", {
            "userId": user.id,
            "prodotto": action.customYugioh.brand,
            
            "color": action.customYugioh.color
        }).pipe(
            map((customYugioh: CustomYugioh) => addItemSuccess({customYugioh: customYugioh}))
        ))
    ));
}