import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { Contact } from '../shared/contacts.model';

import { ToastrService } from 'ngx-toastr';
import { ContactsService } from '../shared/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(
    private contactService: ContactsService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getAll()
      .subscribe({
        next: (contacts) => {
          this.contacts = contacts
        },
        error: (_erro) => { alert("Ocorreu um erro no servidor, tente mais tarde") }
      })
  }

  deleteContact(contact: Contact) {
    this.toastService.warning('Clique aqui para confirmar', 'Deseja mesmo excluir?!', {
      timeOut: 6000,
      positionClass: 'toast-center-center'
    })
      .onTap
      .pipe(take(1))
      .subscribe(() => this.toasterClickedHandler(contact));
  }

  toasterClickedHandler(contact: Contact) {
    this.contactService.delete(contact.id)
      .subscribe({
        next: () => {
          this.contacts = this.contacts.filter(c => c != contact),
            this.toastService.success('204', 'Excluído com sucesso', {
              timeOut: 1000,
              positionClass: 'toast-bottom-center'
            })
        },
        error: () => { alert("Ocorreu um erro no servidor, tente mais tarde") }
      })
  }

}
