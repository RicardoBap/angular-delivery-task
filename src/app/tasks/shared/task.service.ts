import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Task } from "./task.model";

@Injectable()
export class TaskService {
  tasksURL = "api/tasks"
  headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/vnd.taskmanager.v1')

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any|Task[]> {
    return this.http.get<Task[]>(this.tasksURL)
      .pipe(
        map((response) => response),
        catchError(this.handleErrors)       
      )
  }
  
  getImportantTasks(): Observable<Task[]> {
    return this.getTasks()
      .pipe(
        map((tasks) =>  tasks.slice(0, 3) ),
        catchError(this.handleErrors)
      )
  }

  getTask(id: number): Observable<Task> {
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

  updateTask(task: Task): Observable<Task> {
    let body = task

    return this.http.put<Task>(`${this.tasksURL}/${task.id}`,body, { headers: this.headers } )
      .pipe(        
        map(() => task),
        catchError(this.handleErrors)
      )
  }

  delete(id: number): Observable<null> {
    let url = `${this.tasksURL}/${id}`

    return this.http.delete<null>(url, { headers: this.headers })
      .pipe(
        map(() => null),
        catchError(this.handleErrors)
      )
  }

  private handleErrors(error: HttpErrorResponse){
    console.log("SALVANDO O ERRO NO ARQUIVO DE LOG - DETALHES DO ERRO => ", error)
    return throwError(console.log(error));
  }

}