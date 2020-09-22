import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ShopPreviewComponent } from './components/shop-preview/shop-preview.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopFormComponent } from './components/shop-form/shop-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InputTextComponent,
    ShopPreviewComponent,
    ShopItemComponent,
    ShopFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    ShopPreviewComponent,
    ShopItemComponent,
    ShopFormComponent
  ]
})
export class SharedModule { }
