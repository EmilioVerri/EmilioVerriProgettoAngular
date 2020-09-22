import { ShopsFacadeService } from '../../services/shops-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { getTodoById, getCurrentNavigatedTodo } from 'src/app/redux/shops';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent {
  get todo(): Observable<Shop>{
    return this.store.pipe(select(getCurrentNavigatedTodo));
  }

  constructor(private todosFacadeService: ShopsFacadeService, private store: Store) {
  }

  editForm(todo: Shop) {
    this.todosFacadeService.editTodo(todo);
  }

  undo(todo: Shop) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
