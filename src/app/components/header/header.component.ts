import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  taskTitle = "Task Master";

  toggleAddTask(){
    console.log('Toggle')
  }
  @Output () 
  notify: EventEmitter<string> = new EventEmitter<string>();

  passData(){
    this.notify.emit("This message come from Header");
    
  }
}
