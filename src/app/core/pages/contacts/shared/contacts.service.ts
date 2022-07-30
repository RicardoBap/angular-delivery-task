import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// AMBIENTES
import { environment } from "src/environments/environment.prod";

// MODEL
import { Contact } from '../shared/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  //contactsURL = "http://localhost:3000/contacts"
  contactsURL: string

  headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/rbk.taskmanager.v1')

  constructor(
    private http: HttpClient) {
    this.contactsURL = `${environment.apiUrl}/contacts`
  }

  getAll(): Observable<any | Contact[]> {
    return this.http.get<any>(this.contactsURL, { headers: this.headers })
      .pipe(
        map(response => response.contacts),
        catchError(this.handleErrors)
      )
  }

  delete(id: any): Observable<null> {
    return this.http.delete<null>(`${this.contactsURL}/${id}`, { headers: this.headers })
      .pipe(
        map(() => null),
        catchError(this.handleErrors)
      )
  }

  private handleErrors(error: HttpErrorResponse) {
    //console.log("SALVANDO O ERRO NO ARQUIVO DE LOG - DETALHES DO ERRO => ", error)
    return throwError(console.log(error));
  }

}
