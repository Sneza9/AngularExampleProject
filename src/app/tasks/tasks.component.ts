import { Component, Input, Output, EventEmitter } from '@angular/core';
import { input, output, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required:true}) name!:string; 
  
  // Ako nismo sigurni da li cemo primiti vrednost onda pisemo ovako
  // sada moze biti undefined 
  @Input() name?:string;
  // Alternativa 
  //@Input() name: string | undefined;
}
