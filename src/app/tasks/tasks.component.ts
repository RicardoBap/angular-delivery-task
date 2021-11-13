import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: [ `.btn-info { margin-right: 5px; }` ]
})

export class TasksComponent implements OnInit {
  tasks: Array<Task>
  selectedTask: Task

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks()
      .then((tasks) => {
        this.tasks = tasks
      })
      .catch((error_msg) => {
        alert(error_msg)
      })
  }

  onSelect(task: Task): void {
    this.selectedTask = task
  }

}