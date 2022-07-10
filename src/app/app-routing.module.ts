import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

import { NotAuthenticatedGuard } from './core/guards/not-authenticated.guard';

import { HomeComponent } from './home/home.component';


const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [NotAuthenticatedGuard] },
  { path: 'home', component: HomeComponent, canActivate: [NotAuthenticatedGuard] },

  { path: 'sign-up', component: SignUpFormComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'sign-in', component: SignInFormComponent, canActivate: [NotAuthenticatedGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
