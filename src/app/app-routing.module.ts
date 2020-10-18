import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'auth' },
    {
      path: 'auth',
      component: AuthComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent }
      ]
    },
    // {path: '**', component: HomeComponent}
  ];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }