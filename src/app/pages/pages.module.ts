// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { PagesRoutingModule } from './pages.routing.module';

// IMPORT DIRECTIVE
import { PreLoadDirective } from './directives/pre-load.directive';
import { BtnContactIconChangeDirective } from './directives/btn-contact-icon-change.directive';

@NgModule({
  declarations: [
    IndexComponent,
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