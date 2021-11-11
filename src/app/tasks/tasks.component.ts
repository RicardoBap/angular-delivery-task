import { Component, OnInit } from "@angular/core";

const TASKS: Array<any> = [
  { id: 1, title: 'fazer tarefa 1' },
  { id: 2, title: 'fazer tarefa 2' },
  { id: 3, title: 'fazer tarefa 3' },
  { id: 4, title: 'fazer tarefa 4' },
  { id: 5, title: 'fazer tarefa 5' },
  { id: 6, title: 'fazer tarefa 6' },
  { id: 7, title: 'fazer tarefa 7' }
]

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: [ `.btn-info { margin-right: 5px; }` ]  
  
})
export class TasksComponent implements OnInit {
  tasks: any[]

  constructor() {}

  ngOnInit() {
   this.tasks = TASKS
  }

}