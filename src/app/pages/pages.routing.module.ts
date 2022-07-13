import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT GUARDS
import { IndexComponent } from './index/index.component';

const ROUTES: Routes = [
  { path: '', component: IndexComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }