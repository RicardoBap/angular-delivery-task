import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT GUARDS
import { NotAuthenticatedGuard } from '../../guards/not-authenticated.guard';

// IMPORT COMPONENT
import { SignUpFormComponent } from './sign-up-form.component';

const ROUTES: Routes = [
  { path: '', component: SignUpFormComponent, canActivate: [NotAuthenticatedGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SignUpFormRoutingModule { }