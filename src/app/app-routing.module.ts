import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasboardComponent } from './dashboard/dashboard.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DasboardComponent},
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'sign-up', component: SignUpFormComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
