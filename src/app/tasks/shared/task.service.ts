import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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

  constructor(private http: HttpClient) {}

  getTasks(): Promise<any|Task[]> {
    let promise = new Promise((resolve, reject) => {
      if(TASKS.length > 0) {
        resolve(TASKS);
      } else {
        let error_msg = 'Não HPA TAREFAS'
        reject(error_msg)
      }     
    })
    return promise
  }
  
  getImportantTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS.slice(0, 3))
  }

  getTask(id: number): Promise<Task> {
    return this.getTasks()
      .then(tasks => 
        tasks.find((task: { id: number; }) => task.id === id)
      )
  }

}