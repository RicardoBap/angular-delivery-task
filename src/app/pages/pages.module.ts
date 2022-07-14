// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { PagesRoutingModule } from './pages.routing.module';

// IMPORT DIRECTIVE
import { PreLoadDirective } from './directives/pre-load.directive';

@NgModule({
  declarations: [
    IndexComponent,
    PreLoadDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [],
  providers: []
})
export class PagesModule { }