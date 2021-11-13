import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { DasboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

import { TaskService } from './tasks/shared/task.service';

const ROUTES = RouterModule.forRoot([
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DasboardComponent},
  { path: 'tasks', component: TasksComponent }
])

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
    RouterModule,
    ROUTES
  ],
  providers: [{ provide: TaskService, useClass: TaskService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
