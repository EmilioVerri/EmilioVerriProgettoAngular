import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AutenticazioneFacadeService} from '../services/autenticazione-facade.service';
import {Store} from '@ngrx/store';
import {selectUserState} from '../../../redux';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  registerForm: FormGroup;

  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get nomeControl(): FormControl {
    return this.registerForm.get('nome') as FormControl;
  }
  get cognomeControl(): FormControl {
    return this.registerForm.get('cognome') as FormControl;
  }

  constructor(private fb: FormBuilder, private service: AutenticazioneFacadeService, private store: Store) {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      nome: [''],
      cognome: ['']
    });
  }

  ngOnInit(): void {
  }

  registrazioneUtente() {
    console.log(this.emailControl.value, this.passwordControl.value, this.cognomeControl.value, this.nomeControl.value);
    this.service.registrazioneFatta(this.emailControl.value, this.passwordControl.value, this.nomeControl.value, this.cognomeControl.value);
  }
}