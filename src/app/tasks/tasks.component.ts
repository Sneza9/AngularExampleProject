import { Component, Input, Output, EventEmitter } from '@angular/core';
import { input, output, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { UntypedFormBuilder } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component"; 
import { NewTaskData } from './task/task.model';
import { TaskServise } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({required:true}) name!:string;

  // Ako nismo sigurni da li cemo primiti vrednost onda pisemo ovako
  // sada moze biti undefined
  //@Input() name?:string;
  // Alternativa
  //@Input() name: string | undefined;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  // Implicitno zna da je boolean tipa, tako da mu ne treba tip 
  // Menja se u true ako je kliknut button Add Task 
  isAddingTask = false; 

  // Property za service 
  private tasksService: TaskServise;

  // Kako bi koristili service pravimo konstruktor 
  // Kazemo Angular-u koji nam dependency treba tako sto prosledjujemo u konstruktoru argument 
  // Angular trazi klasu ali ne skenira sve fajlove i foldere 
  // Tako da moramo da registrujemo TaskServise kao injectable 
  constructor(tasksService: TaskServise){
    // Kako bi bilo dostupno u ovoj klasi treba nam property za to
    this.tasksService=tasksService
  }

  // Moze i ovako 
  //constructor(private tasksService: TaskServise){}



  // dodajemo task property
  // svaki task moramo da povezemo sa user-om
  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ];

  // get property
  get selectedUserTask() {
    // filtriramo ih prema taskovima koje pripadaju kliknutom user-u
    // za svaki task
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  // Kako bi se povezale tasks i taks komponente
  // onCompleteTask(id: string) {
  //   // Ako je jednak onda je to taks koji treba da obrisemo
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);

  //   // Kada koristimo service 
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  // onCancelAddTask(){
  //   this.isAddingTask=false;
  // }
  
  onCloseAddTask(){
    this.isAddingTask=false;
  }

  // Kada koristimo service ovo nam ne treba 
  // // Dodavanje novog taska 
  // onAddTask(taskData:NewTaskData)
  // {
  //   // Umesto push koristimo unshift - da dodamo na pocetak niza 
  //   // this.tasks.unshift({
  //   //   // time u ms 
  //   //   id: new Date().getTime().toString(), 
  //   //   userId: this.userId,
  //   //   title: taskData.tittle,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date
  //   // })
  //   this.tasksService.addTask(taskData, this.userId);
  //   this.isAddingTask=false;
  // }
}
