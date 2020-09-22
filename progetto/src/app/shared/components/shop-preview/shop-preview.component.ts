import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';

@Component({
  selector: 'app-shop-preview',
  templateUrl: './shop-preview.component.html',
  styleUrls: ['./shop-preview.component.scss']
})
export class ShopPreviewComponent {

  @Input()
  todo: Shop;

  @Output()
  detailEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  detailClick() {
    this.detailEvent.emit();
  }

}
