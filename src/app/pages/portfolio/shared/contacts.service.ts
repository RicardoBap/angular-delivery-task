import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Contact } from 'src/app/core/pages/contacts/shared/contacts.model';

import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsURL: string

  headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/rbk.taskmanager.v1')

  constructor(private http: HttpClient) {
    this.contactsURL = `${environment.apiUrl}/contacts`
  }

  create(contact: Contact): Observable<Contact> {
    let body = contact

    return this.http.post<Contact>(this.contactsURL, body, { headers: this.headers })
      .pipe(
        map((response) => response),
        catchError(this.handleErrors)
      )
  }

  private handleErrors(error: HttpErrorResponse) {
    //console.log("SALVANDO O ERRO NO ARQUIVO DE LOG - DETALHES DO ERRO => ", error)
    return throwError(console.log(error));
  }

}
