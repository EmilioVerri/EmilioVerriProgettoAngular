import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ShopsFacadeService } from '../../services/shops-facade.service';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/core/model/shop.interface';
import { selectShops } from 'src/app/redux/shops';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  get shopsList(): Observable<Shop[]> {
    return this.store.pipe(select(selectShops));
  }

  constructor(private shopsFacadeService: ShopsFacadeService, private store: Store) { }

  ngOnInit(): void {
  }


  
  showDetail(shop: Shop) {
    this.shopsFacadeService.goToDetail(shop.id);
  }

  

  

}
