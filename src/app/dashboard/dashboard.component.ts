import { Component, OnInit } from "@angular/core";

import { TaskService } from "../tasks/shared/task.service";

import { Task } from "../tasks/shared/task.model";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DasboardComponent implements OnInit {
  tasks: Array<Task>

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getImportantTasks()
      .then((tasks) => 
        this.tasks = tasks
      )
  }

}