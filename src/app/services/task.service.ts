import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Task } from '../Tasks';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'


  constructor(private http: HttpClient){

  }

  getTasks(): Observable<Task[]>{
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl)
  }

  //Delete Task
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
 

    addTask(task: Task): Observable<Task>{
      let httpOptions = {}
      return this.http.post<Task>(this.apiUrl, task, httpOptions);
    }
}
