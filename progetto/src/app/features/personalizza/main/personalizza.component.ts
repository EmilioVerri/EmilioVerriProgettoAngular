import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomYugioh } from 'src/app/core/model/customYu-Gi-Oh!';
import { Yugioh } from 'src/app/core/model/Yu-Gi-Oh!';
import { User } from 'src/app/core/model/user';
import {  selectYugiohByBrand } from 'src/app/redux/yugioh';



@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {
  [x: string]: any;


  get yugioh(): Observable<Yugioh> {
    return this.store.pipe(select(selectYugiohByBrand));
    
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
   
    
  
  

  }
}