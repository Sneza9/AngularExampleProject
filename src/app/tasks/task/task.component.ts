import { Component, Input } from '@angular/core';
import { Task } from './task.model';

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
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Primamo ceo objekat 
  @Input({required:true}) taks!:Task;
}
