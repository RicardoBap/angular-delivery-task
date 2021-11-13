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
  newTask: Task

  constructor(private taskService: TaskService) {
    this.newTask = new Task(NaN, '')
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe({
        next: (tasks) => { this.tasks = tasks },
        error: (_erro) => { alert("Ocorreu um erro no servidor, tente mais tarde") }
    })
  }

  createTask() {
    this.newTask.title = this.newTask.title.trim()

    if(!this.newTask.title) {
      alert("A tarefa deve ter um título")
    } else {
      this.taskService.createTask(this.newTask)
        .subscribe({
          next: (task) => { this.tasks.push(task),
            this.newTask = new Task(NaN, '')
        },
          error: () => { alert("Ocorreu um erro no servidor, tente mais tarde") }
        })
    }
  }

}