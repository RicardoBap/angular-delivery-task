// IMPORT ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORT COMPONENTS
import { DasboardComponent } from './dashboard.component';

// IMPORT MODULE
import { RouterModule } from '@angular/router';

// IMPORT ROUTING
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule { }
