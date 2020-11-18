import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './pages/auth/auth.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServiceComponent } from './pages/service/service.component';
import { SecurityGuard } from './services/guards/security.guard';

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
  { path: 'services', component: ServiceComponent, canActivate: [SecurityGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [SecurityGuard] }
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