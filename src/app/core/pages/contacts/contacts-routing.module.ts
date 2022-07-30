import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';

import { ContactsComponent } from './contacts/contacts.component';

const ROUTES: Routes = [
  { path: '', component: ContactsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
