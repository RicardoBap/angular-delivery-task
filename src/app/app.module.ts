// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// IMPORT MODULES
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core.routing.module';

// IMPORT COMPONENTS
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TopPageComponent } from './home/top-page/top-page.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
