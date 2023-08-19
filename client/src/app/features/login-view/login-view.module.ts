import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view.component';
import { LoginViewRoutingModule } from './login-view-routing.module';

@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    LoginViewRoutingModule,
    CommonModule
  ]
})
export class LoginViewModule { }
