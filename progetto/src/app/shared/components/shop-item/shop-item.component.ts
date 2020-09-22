import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';
import { User } from 'src/app/core/model/user.interface';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {

  @Input()
  shop: Shop;
  

  @Output()
  editEvent: EventEmitter<Shop> = new EventEmitter();

  constructor() { }

  editClick() {
    this.editEvent.emit(this.shop);
  }

}
