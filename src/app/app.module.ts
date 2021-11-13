// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// IMPORT MODULES
import { AppRoutingModule } from './app-routing.module';

// IMPORT COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DasboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

// IMPORTS SERVICES
import { TaskService } from './tasks/shared/task.service';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [{ provide: TaskService, useClass: TaskService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
