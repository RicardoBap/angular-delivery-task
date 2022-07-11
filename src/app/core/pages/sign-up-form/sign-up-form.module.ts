// IMPORT ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// IMPORT COMPONENTS
import { SignUpFormComponent } from './sign-up-form.component';

// IMPORT ROUTING
import { SignUpFormRoutingModule } from './sign-up-form.routing.module';


@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    SignUpFormRoutingModule
  ],
  exports: []
})
export class SignUpFormModule { }