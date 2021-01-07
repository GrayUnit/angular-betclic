import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [PageLoginComponent, FormRegisterComponent, PageRegisterComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
