import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  sessionsURL = "http://localhost:3000/sessions"
  headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/rbk.taskmanager.v1')

  constructor(private http: HttpClient) {}

  signIn(loginForm: User): Promise<void> {
    let session = {
      email: loginForm.email,
      password: loginForm.password
    }

    const body = session 

    console.log("=>", body) 

    return this.http.post<User>(this.sessionsURL, body, { headers: this.headers } )
      .toPromise()
      .then(response => {
        console.log("*", response)
        //this.armazenarToken(response.auth_token)
        //this.successfulLogin(response.auth_token)       
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

  signUp() {}

  signOut() {}

  userSignedIn() {}

}
