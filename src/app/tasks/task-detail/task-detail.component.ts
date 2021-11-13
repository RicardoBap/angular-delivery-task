import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { switchMap } from 'rxjs/operators';

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styles: [ `.btn-default { margin-right: 5px; }`]
})
export class TaskDetailComponent implements  OnInit {
  task: Task

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.taskService.getTask(+params['id']))  
      )
      .subscribe({
        next: (task) => { this.task = task },
        error: (_erro) => { alert("Ocorreu um erro no servidor, tente mais tarde") }
      })
  }

  goBack() {
    this.location.back()
  }

}
