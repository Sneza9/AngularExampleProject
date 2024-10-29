import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskServise } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [TasksComponent, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  // @Output() cancel = new EventEmitter<void>();
  // Za service 
  @Output() close = new EventEmitter<void>();
  // Kad koristimo service ne emitujemo add event 
  // @Output() add = new EventEmitter<NewTaskData>(); 
  // Zbog service-a 
  @Input({required: true}) userId!:string;

  // Smestamo podatke koje je korisnik uneo
  enteredTittle = '';
  enteredSummary = '';
  // Da je type="date", ali svaki input vraca type string pa je zato enterDate tipa string
  enteredDate = '';

  // Pomocu signala
  // enteredTittle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  // Za service 
  private taskService=inject(TaskServise);

  onCancel() {
    // Ne prenosi nikakve podatke, samo emituje event
    // this.cancel.emit(); 
    this.close.emit();
  }

  onSubmit() {
    // Zelimo da se task komponenta obavesti
    // this.add.emit({
    //   tittle:this.enteredTittle, 
    //   summary:this.enteredSummary,
    //   date:this.enteredDate
    // }); 

    this.taskService.addTask({
      tittle:this.enteredTittle, 
      summary: this.enteredSummary, 
      date: this.enteredDate
    }, this.userId)
    // Kako bi se forma zatvorila kada comitujemo 
    this.close.emit();
  }
}
