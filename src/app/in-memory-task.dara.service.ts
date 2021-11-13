import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class InMemoryTaskDataService implements InMemoryDbService {

  createDb() {
    let tasks = [
      { id: 1, title: 'fazer tarefa 1' },
      { id: 2, title: 'fazer tarefa 2' },
      { id: 3, title: 'fazer tarefa 3' },
      { id: 4, title: 'fazer tarefa 4' },
      { id: 5, title: 'fazer tarefa 5' },
      { id: 6, title: 'fazer tarefa 6' },
      { id: 7, title: 'fazer tarefa 7' }
    ]
    return { tasks }
  }

}