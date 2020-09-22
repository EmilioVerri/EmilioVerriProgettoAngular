import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';
import { Shop } from '../model/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopsServerService {
    constructor(private httpCommunications: HttpCommunicationsService) { }

    retrieveAllShops(): Observable<Shop[]>{
      return this.httpCommunications.retrieveGetCall<Shop[]>("shops");
    }
  
    retrieveShopById(id: number): Observable<Shop>{
      return this.httpCommunications.retrieveGetCall<Shop>("shops/"+id);
    }
  
    updateShop(shop: Shop): Observable<Shop>{
      return this.httpCommunications.retrievePutCall("shops/"+shop.id, shop);
    }
  
    insertShop(shop: Shop): Observable<Shop>{
      return this.httpCommunications.retrievePostCall("shops", shop);
    }
}
