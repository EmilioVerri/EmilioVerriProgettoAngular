import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ShopsFacadeService } from '../../services/shops-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Shop } from 'src/app/core/model/shop.interface';
import { filter, mergeMap, switchMap } from 'rxjs/operators';
import { getTodoById, getCurrentNavigatedTodo } from 'src/app/redux/shops';
import {Router} from '@angular/router';


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})




export class ShopDetailComponent {
  
 

  get todo(): Observable<Shop>{
    return this.store.pipe(select(getCurrentNavigatedTodo));
  }

  constructor(private todosFacadeService: ShopsFacadeService, private store: Store, private router: Router) {
  }

  edit(todo: Shop) {
    this.todosFacadeService.goToEdit(todo.id);
  }


  cancel() {
    this.router.navigateByUrl('/shops');
  }

}
