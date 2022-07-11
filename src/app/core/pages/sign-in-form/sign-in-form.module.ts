// IMPORT ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// IMPORT COMPONENTS
import { SignInFormComponent } from './sign-in-form.component';

// IMPORT ROUTING
import { SignInFormRoutingModule } from './sign-in-form.routing.module';


@NgModule({
  declarations: [
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    SignInFormRoutingModule
  ],
  exports: []
})
export class SignInFormModule { }