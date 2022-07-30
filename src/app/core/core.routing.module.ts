import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
  {
    path: 'dashboard', loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'tasks', loadChildren: () =>
      import('./pages/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'sign-in', loadChildren: () =>
      import('./pages/sign-in-form/sign-in-form.module').then(m => m.SignInFormModule)
  },
  {
    path: 'sign-up', loadChildren: () =>
      import('./pages/sign-up-form/sign-up-form.module').then(m => m.SignUpFormModule)
  },
  {
    path: 'contacts', loadChildren: () =>
      import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }