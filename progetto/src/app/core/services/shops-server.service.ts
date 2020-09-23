import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';
import { Shop } from '../model/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopsServerService { //service definita per fare l'aggiungi al db del prodotto creato
    constructor(private httpCommunications: HttpCommunicationsService) { } //nel costruttore importo httpComunications

    retrieveAllShops(): Observable<Shop[]>{// fa riferimento alla shops-facede-service.ts
      return this.httpCommunications.retrieveGetCall<Shop[]>("shops");//faccio get
    }
  
    insertShop(shop: Shop): Observable<Shop>{
      return this.httpCommunications.retrievePostCall("shops", shop);//faccio post
    }
}
