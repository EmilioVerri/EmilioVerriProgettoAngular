import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShopEditComponent } from './components/shop-edit/shop-edit.component';
import { ShopAddComponent } from './components/shop-add/shop-add.component';
import { ShopsComponent } from './components/main/shops.component';

const routes: Routes = [{
  path: '', component: ShopsComponent, children: [
    {path: 'detail/:id', component: ShopDetailComponent},
    {path: 'edit/:id', component: ShopEditComponent},
    {path: 'add', component: ShopAddComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
