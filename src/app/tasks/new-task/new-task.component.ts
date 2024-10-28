import { Component, EventEmitter, Output, signal } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [TasksComponent, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  // Smestamo podatke koje je korisnik uneo
  enteredTittle = '';
  enteredSummary = '';
  // Da je type="date", ali svaki input vraca type string pa je zato enterDate tipa string
  enteredDate = '';

  // Pomocu signala
  // enteredTittle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    // Ne prenosi nikakve podatke, samo emituje event
    this.cancel.emit();
  }

  onSubmit() {
    // Zelimo da se task komponenta obavesti
    this.add.emit({
      tittle:this.enteredTittle, 
      summary:this.enteredSummary,
      date:this.enteredDate
    });
  }
}
