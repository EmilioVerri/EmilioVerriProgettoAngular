import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { OnInit } from '@angular/core';
import { Shop } from 'src/app/core/model/shop.interface';
import { map, filter } from 'rxjs/operators';
import { getFirstTodo } from 'src/app/redux/shops';

import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { loginUserSuccess} from 'src/app/redux/autenticazione/autenticazione.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  get todo(): Observable<Shop>{
    return this.store.pipe(select(getFirstTodo));
  }

 
  constructor(config: NgbCarouselConfig, private store: Store) { 
  
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
    
  }
}



 


