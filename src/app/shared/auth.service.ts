import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { StorageService } from "./storage/storage.service";

import { LocalUser } from "./storage/local_user";
import { User } from "./user.model";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class AuthService {
  sessionsURL = "http://localhost:3000/sessions"
  usersURL = "http://localhost:3000/users"
  headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/rbk.taskmanager.v1')

  constructor(private http: HttpClient, private storage: StorageService) {}

  signIn(loginForm: any): Promise<void> {
    let session = {
      email: loginForm.email,
      password: loginForm.password
    }

    const body = session

    console.log("=>", body) 

    return this.http.post<User>(this.sessionsURL, body, { headers: this.headers } )
      .toPromise()
      .then(response => {
        console.log("*", response.auth_token)
        this.successfulLogin(response.auth_token)       
      })
      .catch(response => {
        console.log("ERRO",response)
        if (response.status === 401 ) {
          if (response.error.errors === 'Invalid password or email') {
          return Promise.reject('Usuario ou senha inválidos')
        }
      }
      return Promise.reject(response)
    })    
  } 

  successfulLogin(token: string) {
    let user:  LocalUser = {
      token: token
    }
    this.storage.setLocalUser(user)
  }

  // signUp(user: any): Observable<any> {
  //   let body = user
  //   console.log('------------', body)

  //   return this.http.post<any>(this.usersURL, body, { headers: this.headers } )
  //     .pipe(        
  //       map(() => user),
  //       catchError(this.handleErrors)
  //     )
  // }

  signUp(userForm: any): Promise<void> {
    const params = {
      "email": userForm.email,
      "password": userForm.password,
      "password_confirmation": userForm.password_confirmation 
    }

    console.log("=>", params, "<=") 

    return this.http.post<any>(this.usersURL, { user: params }, { headers: this.headers } )
      .toPromise()
      .then(response => {
        console.log("*SIG-UP*", response)
        this.successfulLogin(response.auth_token)       
      })
      .catch(response => {
        console.log("ERRO",response)
        if (response.status === 401 ) {
          if (response.error.errors === 'Invalid password or email') {
          return Promise.reject('Usuario ou senha inválidos')
        }
      }
      return Promise.reject(response)
    })  
  } 

  signOut() {}

  userSignedIn() {
    return this.storage.getLocalUser()
  }

  private handleErrors(error: HttpErrorResponse){
    console.log("SALVANDO O ERRO NO ARQUIVO DE LOG - DETALHES DO ERRO => ", error)
    return throwError(console.log(error));
  }

}
