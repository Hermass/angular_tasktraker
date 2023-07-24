import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

    text ?: string;
    day ?: number;
    reminder : boolean = false;



 constructor(){

 }

 onSubmit(){
  if(!this.text){
    alert('Please add a Task!');
    return;
  }


 //Creating the Object
  const newTask = {
  text: this.text,
  day: this.day,
  reminder: this.reminder,
 };

 //Emit Event
//  this.onAddTask.emit(newTask);

 //Clear the Form Value
 this.text = '';
 //this.day = '';
 this.reminder = false;
}
}
