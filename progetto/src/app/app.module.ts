import { environment } from './../environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux';
import { ShopsEffects } from './redux/shops/shops.effects';
import { RouterEffects } from './redux/router/router.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutenticazioneComponent } from './features/autenticazione/autenticazione.component';
import {autenticazioneEffects} from './redux/autenticazione/autenticazione.effects';




@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ShopsEffects, RouterEffects,autenticazioneEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }