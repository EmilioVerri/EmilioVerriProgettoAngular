import { updateTodo, postTodo } from '../../../redux/shops/shops.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';

@Injectable()
export class ShopsFacadeService {

  constructor(private router: Router, private store: Store) { }

  editTodo(todo: Shop) {
    this.store.dispatch(updateTodo({todo}));
  }

  addTodo(todo: Shop) {
    this.store.dispatch(postTodo({todo}));
  }

  goToTodosHome() {
    this.router.navigateByUrl('/shops');
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/shops/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/shops/edit/' + id);
  }

}
