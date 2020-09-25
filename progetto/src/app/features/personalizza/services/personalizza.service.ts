import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';

import { addItem } from 'src/app/redux/cart/cart.action';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private store: Store) { }

  createCustomProduct() {
    
  }

  addToCart(customYugioh: CustomYugioh) {
    this.store.dispatch(addItem({customYugioh}))
  }
}