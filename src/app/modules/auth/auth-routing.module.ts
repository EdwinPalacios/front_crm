import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'password', component: PasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
