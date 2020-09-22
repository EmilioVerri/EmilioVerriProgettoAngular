import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

import { ShopsRoutingModule } from './shops-routing.module';
import { ShopsComponent } from './components/main/shops.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { ShopEditComponent } from './components/shop-edit/shop-edit.component';
import { ShopsFacadeService } from './services/shops-facade.service';
import { ShopAddComponent } from './components/shop-add/shop-add.component';
import { ShopsNavigationEffects } from './redux/shops-navigation.effects';



@NgModule({
  declarations: [ShopsComponent, ShopDetailComponent, ShopEditComponent, ShopAddComponent],
  providers: [ShopsFacadeService],
  imports: [
    SharedModule,
    EffectsModule.forFeature([ShopsNavigationEffects]),
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
