import { updateShop, postShop } from '../../../redux/shops/shops.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';

@Injectable()
export class ShopsFacadeService {

  constructor(private router: Router, private store: Store) { }

  editShop(shop: Shop) {
    this.store.dispatch(updateShop({shop}));
  }

  addShop(shop: Shop) {
    this.store.dispatch(postShop({shop}));
  }

  goToShopsHome() {
    this.router.navigateByUrl('/shops');
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/shops/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/shops/edit/' + id);
  }

}
