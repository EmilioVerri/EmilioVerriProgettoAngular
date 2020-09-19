import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuardService } from './core/guards/logged-guard.service';
import { LoginGuardService } from './core/guards/login-guard.service';


const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./features/autenticazione/autenticazione.module').then(m => m.AutenticazioneModule), canLoad: [LoggedGuardService]},
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoggedGuardService] },
  { path: 'todos', loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule), canLoad: [LoggedGuardService] },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
