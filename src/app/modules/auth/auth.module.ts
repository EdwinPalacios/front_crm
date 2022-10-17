import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [SigninComponent, PasswordComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, AuthRoutingModule]
})
export class AuthModule {}
