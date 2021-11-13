import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Task } from "./task.model";

@Injectable()
export class TaskService {
  tasksURL = "api/tasks"

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

  private handleErrors(error: HttpErrorResponse){
    console.log("SALVANDO O ERRO NO ARQUIVO DE LOG - DETALHES DO ERRO => ", error)
    return throwError(console.log(error));
  }

}