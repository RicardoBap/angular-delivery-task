import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORT GUARDS
import { AuthGuard } from './guards/auth.guard';

// IMPORT COMPONENT
import { DasboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';


const ROUTES: Routes = [
  { path: 'dashboard', component: DasboardComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'tasks/:id', component: TaskDetailComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }