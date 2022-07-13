import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotAuthenticatedGuard } from './core/guards/not-authenticated.guard';

import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [NotAuthenticatedGuard] },
  { path: 'home', component: HomeComponent, canActivate: [NotAuthenticatedGuard] },
  {
    path: 'index', loadChildren: () =>
      import('./pages/pages.module').then(m => m.PagesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
