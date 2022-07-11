import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT GUARDS
import { AuthGuard } from '../../guards/auth.guard';

// IMPORT COMPONENT
import { DasboardComponent } from './dashboard.component';

const ROUTES: Routes = [
  { path: '', component: DasboardComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }