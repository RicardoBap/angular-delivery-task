import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Task } from "./task.model";

@Injectable()
export class TaskService {
  tasksURL = "api/tasks" //http://localhost:3000/tasks
  headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/vnd.taskmanager.v1')

  constructor(private http: HttpClient) {}

  getAll(): Observable<any|Task[]> {
    return this.http.get<Task[]>(this.tasksURL)
      .pipe(
        map((response) => response),
        catchError(this.handleErrors)       
      )
  }
  
  getImportant(): Observable<Task[]> {
    return this.getAll()
      .pipe(
        map((tasks) =>  tasks.slice(0, 3) ),
        catchError(this.handleErrors)
      )
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksURL}/${id}`)
      .pipe(
        map((response) => response),
        catchError(this.handleErrors)
      )
  }

  create(task: Task): Observable<Task> {
    let body = task 

    return this.http.post<Task>(this.tasksURL, body, { headers: this.headers })   
      .pipe(
        map((response) => response),
        catchError(this.handleErrors)
      )
  }

  update(task: Task): Observable<Task> {
    let body = task

    return this.http.put<Task>(`${this.tasksURL}/${task.id}`,body, { headers: this.headers } )
      .pipe(        
        map(() => task),
        catchError(this.handleErrors)
      )
  }

  delete(id: number): Observable<null> {

    return this.http.delete<null>(`${this.tasksURL}/${id}`, { headers: this.headers })
      .pipe(
        map(() => null),
        catchError(this.handleErrors)
      )
  }

  searchByTitle(term: string): Observable<Task[]> {
  
    return this.http.get<any>(`${this.tasksURL}?title=${term}`, { headers: this.headers })
    .pipe(
      map((response) => response),
      catchError(this.handleErrors)
    )
  }

  private handleErrors(error: HttpErrorResponse){
    console.log("SALVANDO O ERRO NO ARQUIVO DE LOG - DETALHES DO ERRO => ", error)
    return throwError(console.log(error));
  }

}