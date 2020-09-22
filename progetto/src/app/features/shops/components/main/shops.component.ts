import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ShopsFacadeService } from '../../services/shops-facade.service';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/core/model/shop.interface';
import { selectTodos } from 'src/app/redux/shops';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  get todosList(): Observable<Shop[]> {
    return this.store.pipe(select(selectTodos));
  }

  constructor(private todosFacadeService: ShopsFacadeService, private store: Store) { }

  ngOnInit(): void {
  }

  showDetail(todo: Shop) {
    this.todosFacadeService.goToDetail(todo.id);
  }

  

}
