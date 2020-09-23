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


  getAllShops() {// creo funzione getAllShops 

    this.shopsServerService.retrieveAllShops().subscribe(shops => { //prendo la funzione retrieveAllShops dentro serverService
      this.todsSubject.next(shops);
    });
  }
  editShop(shop: Shop) {
    this.store.dispatch(updateShop({shop}));//questa funzione fa riferimento alla action updateShop e gli passo shop
  }

  addShop(shop: Shop) {//la funzione aggiungi allo shop gli passo come valori shop
    this.shopsServerService.insertShop(shop).subscribe(() => {  //vado a richiamare il service nel core module e faccio funzione insert passandogli shop
        this.getAllShops();//richiamo getAllschop
        this.goToShopsHome();//richiamo funzione goToSchopsHome
      });
    }

  goToShopsHome() { //naviga verso shops
    this.router.navigateByUrl('/shops');
  }

  goToDetail(id: number) {// viene preso l'id di quella selezionata
    this.router.navigateByUrl('/shops/detail/' + id);// naviga verso l'elemento selezionato
  }
  
  goToEdit(id: number) {// va a fare una navigazione verso l'elemento selezionato
    this.router.navigateByUrl('/shops/edit/' + id);
  }

}
