// IMPORT ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORT COMPONENTS
import { DasboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DasboardComponent
  ]
})
export class DashboardModule { }
