import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { retrieveAllTodos } from './redux/shops/shops.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'EmilioCommerce';
  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllTodos());
  }


}
