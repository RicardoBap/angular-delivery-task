import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Task } from "./task.model";

const TASKS: Array<Task> = [
  { id: 1, title: 'fazer tarefa 1' },
  { id: 2, title: 'fazer tarefa 2' },
  { id: 3, title: 'fazer tarefa 3' },
  { id: 4, title: 'fazer tarefa 4' },
  { id: 5, title: 'fazer tarefa 5' },
  { id: 6, title: 'fazer tarefa 6' },
  { id: 7, title: 'fazer tarefa 7' }
]

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