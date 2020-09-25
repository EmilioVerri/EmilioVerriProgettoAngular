import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Yugioh } from 'src/app/core/model/Yu-Gi-Oh!';
import { initProduct, retrieveAllProducts } from './yugioh.action';
import { Action } from '@ngrx/store';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';



@Injectable()
export class YugiohEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllProducts():Observable<Yugioh[]>{
        return this.http.retrieveGetCall<Yugioh[]>("yugioh")
    }

    getAllProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(() => this.retreiveAllProducts().pipe(
            tap((yugioh) => {
                let products=JSON.stringify(yugioh);
                sessionStorage.setItem("yugioh",products);
            }),
            map((yugioh) => initProduct({yugioh}))

        ))
    ));}
