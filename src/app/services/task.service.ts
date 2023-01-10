import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import { Tasks } from 'src/app/Task';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }



  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl)
  }

  deleteTask(task: Tasks): Observable<Tasks> 
  {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Tasks>(url);
  }

  updateTaskReminder(task: Tasks): Observable<Tasks>
  {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Tasks>(url,task, httpOptions);
  }

  addTask (task: Tasks): Observable<Tasks>{
   
   return this.http.post<Tasks>(this.apiUrl, task, httpOptions);
  }
}
