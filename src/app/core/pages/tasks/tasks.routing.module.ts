import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT GUARDS
import { AuthGuard } from '../../guards/auth.guard';

// IMPORT COMPONENT
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const ROUTES: Routes = [
  { path: '', component: TasksComponent, canActivate: [AuthGuard] },
  { path: ':id', component: TaskDetailComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }