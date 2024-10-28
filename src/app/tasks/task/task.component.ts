import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

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
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Primamo ceo objekat 
  @Input({required:true}) taks!:Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.taks.id);
  }
}
