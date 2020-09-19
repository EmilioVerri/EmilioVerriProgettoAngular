import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {autenticazioneEffects} from '../../../redux/autenticazione/autenticazione.effects';
import {AutenticazioneFacadeService} from '../services/autenticazione-facade.service';
import {Observable} from 'rxjs';
import {selectUserState} from '../../../redux';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string | null;
  getState: Observable<any>;

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder, private service: AutenticazioneFacadeService, private store: Store) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
    this.getState = this.store.select(selectUserState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.loginError = state.errorMessage;
    });
  }

  loginUtente() {
    console.log(this.emailControl.value, this.passwordControl.value);
    this.service.loginFatto(this.emailControl.value, this.passwordControl.value);
  }
}