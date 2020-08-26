import { updateTodo, postTodo } from './../../../redux/todos/todos.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.interface';

@Injectable()
export class TodosFacadeService {

  constructor(private router: Router, private store: Store) { }

  editTodo(todo: Todo) {
    this.store.dispatch(updateTodo({todo}));
  }

  addTodo(todo: Todo) {
    this.store.dispatch(postTodo({todo}));
  }

  goToTodosHome() {
    this.router.navigateByUrl('/todos');
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/todos/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/todos/edit/' + id);
  }

}
