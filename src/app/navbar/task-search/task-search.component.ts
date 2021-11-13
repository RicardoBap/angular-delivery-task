import { Component } from "@angular/core";
import { TaskService } from "src/app/tasks/shared/task.service";

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})
export class TaskSearchComponent {

  constructor(private taskService: TaskService) {}

}