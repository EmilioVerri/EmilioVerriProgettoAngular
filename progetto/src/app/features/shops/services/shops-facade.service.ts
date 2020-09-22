import { updateShop, postShop } from '../../../redux/shops/shops.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';
import { BehaviorSubject } from 'rxjs';
import { ShopsServerService } from 'src/app/core/services/shops-server.service';

@Injectable()
export class ShopsFacadeService {


    private todsSubject: BehaviorSubject<Shop[]> = new BehaviorSubject(null);
  tods$ = this.todsSubject.asObservable();

  private todSelectedSubject: BehaviorSubject<Shop> = new BehaviorSubject(null);
  shopSelected$ = this.todSelectedSubject.asObservable();
  
  constructor(private shopsServerService: ShopsServerService,private router: Router, private store: Store) { }


  getAllShops() {

    this.shopsServerService.retrieveAllShops().subscribe(shops => {
      this.todsSubject.next(shops);
    });
  }
  editShop(shop: Shop) {
    this.store.dispatch(updateShop({shop}));
  }

  addShop(shop: Shop) {
    this.shopsServerService.insertShop(shop).subscribe(() => {
        this.getAllShops();
        this.goToShopsHome();
      });
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
