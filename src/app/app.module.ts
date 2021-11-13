// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// IMPORT MODULES
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

// IMPORT COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DasboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';

// IMPORTS SERVICES
import { TaskService } from './tasks/shared/task.service';
import { InMemoryTaskDataService } from './in-memory-task.dara.service';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryTaskDataService),
    RouterModule
  ],
  providers: [{ provide: TaskService, useClass: TaskService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
