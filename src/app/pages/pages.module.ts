// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORT ROUTING
import { PagesRoutingModule } from './pages.routing.module';

// IMPORT COMPONENT
import { PortfolioComponent } from './portfolio/portfolio.component';

// IMPORT DIRECTIVE
import { PreLoadDirective } from './directives/pre-load.directive';
import { BtnContactIconChangeDirective } from './directives/btn-contact-icon-change.directive';

@NgModule({
  declarations: [
    PortfolioComponent,
    PreLoadDirective,
    BtnContactIconChangeDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [],
  providers: []
})
export class PagesModule { }