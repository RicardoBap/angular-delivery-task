import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT COMPONENTS
import { PortfolioComponent } from './portfolio/portfolio.component';

const ROUTES: Routes = [
  { path: '', component: PortfolioComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }