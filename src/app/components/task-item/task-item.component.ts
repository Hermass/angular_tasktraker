import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() task : any;
  @Output() onDeleteTask: EventEmitter<Task> =  new EventEmitter();
  faTimes = faTimes;

  onDelete(){
    console.log("task")
   // this.task = this.task .onDelete();
   this.onDeleteTask.emit();
    
  }
}
