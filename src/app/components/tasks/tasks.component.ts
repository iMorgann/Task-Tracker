import { Component , OnInit} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Tasks } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Tasks [] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.task = tasks));
  }

  deleteTask(task: Tasks) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.task = this.task.filter(
        (t) => t.id !== task.id)));
  }

  toggleReminder(task: Tasks) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Tasks) {
    this.taskService.addTask(task).subscribe((task) => (this.task.push(task)))
  }

}
