import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { FormControl, FormGroup } from "@angular/forms";

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
  reactiveTaskForm: FormGroup

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.reactiveTaskForm = new FormGroup({
      title: new FormControl(null),
      deadline: new FormControl(null),
      done: new FormControl(null),
      description: new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.taskService.getById(+params['id']))  
      )
      .subscribe({
        next: (task) => { this.task = task },
        error: (_erro) => { alert("Ocorreu um erro no servidor, tente mais tarde") }
      })
  }

  taskDoneOptions: Array<any> = [
    { value: false, text: "Pendente" },
    { value: true, text: "Feita" }
  ]

  goBack() {
    this.location.back()
  }

  updateTask() {
    if(!this.task.title) {
      alert("A tarefa deve ter um título")
    } else {
      this.taskService.update(this.task)
        .subscribe({
          next: () => { alert("Tarefa atualizada com sucesso!") },
          error: () => { alert("Ocorreu um erro no servidor, tente mais tarde") }
        })
    }
  }

}
