import { ShopsFacadeService } from '../../services/shops-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { getShopById, getCurrentNavigatedShop } from 'src/app/redux/shops';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent {
  get shop(): Observable<Shop>{
    return this.store.pipe(select(getCurrentNavigatedShop));
  }

  constructor(private shopsFacadeService: ShopsFacadeService, private store: Store) {
  }

  editForm(shop: Shop) {
    this.shopsFacadeService.editShop(shop);
  }

  undo(shop: Shop) {
    this.shopsFacadeService.goToDetail(shop.id);
  }

}
