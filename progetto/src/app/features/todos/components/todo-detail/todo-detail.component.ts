import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { TodosFacadeService } from '../../services/todos-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Todo } from 'src/app/core/model/todo.interface';
import { filter, mergeMap, switchMap } from 'rxjs/operators';
import { getTodoById, getCurrentNavigatedTodo } from 'src/app/redux/todos';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})




export class TodoDetailComponent {
  
 

  get todo(): Observable<Todo>{
    return this.store.pipe(select(getCurrentNavigatedTodo));
  }

  constructor(private todosFacadeService: TodosFacadeService, private store: Store, private router: Router) {
  }

  edit(todo: Todo) {
    this.todosFacadeService.goToEdit(todo.id);
  }


  cancel() {
    this.router.navigateByUrl('/todos');
  }

}
