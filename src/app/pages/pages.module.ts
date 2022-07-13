// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    PagesRoutingModule
  ],
  exports: [],
  providers: []
})
export class PagesModule { }