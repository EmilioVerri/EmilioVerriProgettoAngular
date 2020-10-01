import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';
import { User } from 'src/app/core/model/user';


import { getCurrentUser } from 'src/app/redux/users';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  

  
  constructor() {}
      ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
