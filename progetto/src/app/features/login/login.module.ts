import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/main/login.component';


@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
