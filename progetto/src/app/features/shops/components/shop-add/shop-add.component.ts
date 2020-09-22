import { ShopsFacadeService } from '../../services/shops-facade.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.scss']
})
export class ShopAddComponent implements OnInit {

  constructor(private shopsFacadeService: ShopsFacadeService) { }

  ngOnInit(): void {
  }

  undo() {
    this.shopsFacadeService.goToShopsHome();
  }

  addShop(shop: Shop) {
    this.shopsFacadeService.addShop(shop);
  }

}
