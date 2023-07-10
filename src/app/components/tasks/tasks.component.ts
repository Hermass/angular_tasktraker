import { Component } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  tasks: Task[] = [];

  //In order to use the Services we need to provide the Constructor 
  constructor(private taskService: TaskService){

  }


  //void means this particular function does not return anything
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }
}
