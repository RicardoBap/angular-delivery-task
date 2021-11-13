import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Task } from "./task.model";

@Injectable()
export class TaskService {
  tasksURL = "api/tasks"

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any|Task[]> {
    return this.http.get<Task[]>(this.tasksURL)
      .pipe(
        map((response) => response)
      )
  }
  
  getImportantTasks(): Observable<Task[]> {
    return this.getTasks()
      .pipe(
        map((tasks) =>  tasks.slice(0, 3) )
      )
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksURL}/${id}`)
      .pipe(
        map((response) => response)
      )
  }

}