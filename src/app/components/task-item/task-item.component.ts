import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() task : any;
  faTimes = faTimes;
}
