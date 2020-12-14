import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
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
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ProductsComponent } from './pages/products/products.component';
import { ItemComponent } from './components/items/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { PrincipleService } from './services/principle-service.service';
import { NewItemComponent } from './components/items/new-item/new-item.component';
import { StepperModule } from './components/stepper/stepper.module';
import { ServiceForm } from './pages/service/forms/service-form/service-form.component';
import { FlyoutServiceComponent } from './pages/service/flyout-service/flyout-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    ServiceComponent,
    MainContainer,
    NavbarComponent,
    TopMenuComponent,
    ProductsComponent,
    ItemsComponent,
    ItemComponent,
    NewItemComponent,
    ServiceForm,
    FlyoutServiceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StepperModule
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
    },
    PrincipleService
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
