import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticazioneComponent } from './autenticazione.component';
import {LoginComponent} from './login/login.component';
import {RegistrazioneComponent} from './registrazione/registrazione.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '', component: AutenticazioneComponent, children : [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegistrazioneComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticazioneRoutingModule { }