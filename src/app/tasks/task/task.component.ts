import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskServise } from '../tasks.service';

// Dodajemo custom objekat 
// interface Task{
//   id:string;
//   userId:string;
//   title:string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Primamo ceo objekat 
  @Input({required:true}) taks!:Task;
  // Ovo nam ne treba ako koristimo service 
  // @Output() complete = new EventEmitter<string>();

  constructor(private tasksService: TaskServise){}

  onCompleteTask(){
    this.tasksService.removeTask(this.taks.id);
    //this.complete.emit(this.taks.id);
  }
}
