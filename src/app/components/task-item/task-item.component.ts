import { Component,Input ,Output,OnInit,EventEmitter} from '@angular/core';
import { Tasks } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Tasks | undefined
  @Output() onDeleteTask: EventEmitter<Tasks> = 
  new EventEmitter ()
  @Output() onToggleReminder: EventEmitter<Tasks> = 
  new EventEmitter ()

  faTimes = faTimes;

  constructor() {}


  ngOnInit(): void {
    
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

}
