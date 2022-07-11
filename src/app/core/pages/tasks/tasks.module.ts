// IMPORT ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// IMPORT COMPONENTS
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

// IMPORT ROUTING
import { TasksRoutingModule } from './tasks.routing.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    TasksRoutingModule
  ],
  exports: []
})
export class TasksModule { }