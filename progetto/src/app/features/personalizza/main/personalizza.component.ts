import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';
import { Yugioh } from 'src/app/core/model/Yu-Gi-Oh!';
import { User } from 'src/app/core/model/user';
import { getCurrentNavigatedYugioh, selectYugiohByBrand } from 'src/app/redux/yugioh';
import { yugiohReducer } from 'src/app/redux/yugioh/yugioh.reducers';
import { getCurrentUser } from 'src/app/redux/users';


@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {
  [x: string]: any;
  prodotto: Yugioh;
  customForm: FormGroup;
  currentyugioh: Yugioh;
  img: string="";
  brand: string="";
  currentUserId: number;
  imgA:string[]
  get yugioh(): Observable<Yugioh> {
    return this.store.pipe(select(selectYugiohByBrand));
    
  }

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  }
  constructor(fb: FormBuilder, private store: Store, private router: Router) {
    this.customForm = fb.group({
      chiusura: ['', Validators.required],
      color: ['', Validators.required],
      testo: [''],
      
      img:['']
    });
    this.yugioh.subscribe(currentImg=>{
      this.img=currentImg.img
    });
    this.yugioh.subscribe(currentBrand=>{
      this.brand=currentBrand.brand
    });

    console.log(this.yugioh);
  }
  
  ngOnInit(): void {
   
    //this.store.dispatch(retrieveAllProducts())
    console.log(this.yugioh);
    this.yugioh.subscribe(productSelected => {
      this.prodotto = productSelected;
      this.img = productSelected.img;
      console.log(this.img);
    });

    this.user.subscribe(user => {
      this.currentUserId = user.id;
    })
  }
  // ripristina() {
  //   this.personalizzaForm.reset()
  // }

  add() {
    let cartYugioh: CustomYugioh = {
      prodotto:  this.prodotto,
      ...this.customForm.value,
      
    };
    console.log(cartYugioh);
    this.customService.addToCart(cartYugioh);
    this.router.navigateByUrl('/cart/'+this.currentUserId);
   }
  

}