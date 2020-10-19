import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { AuthService } from './services/auth.service';
import { CustomvalidationService } from './services/validators/custom-validators.service';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';
import { ServiceComponent } from './pages/service/service.component';
import { MainContainer } from './components/main-container/main-container.component';
import { PromptService } from './services/prompt.service';
import { LocalStorage } from './services/storage.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SecurityGuard } from './services/guards/security.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    ServiceComponent,
    MainContainer,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    CustomvalidationService,
    PromptService,
    LocalStorage,
    SecurityGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
