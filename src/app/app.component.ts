import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  //vraca objekat user koji je kliknut i onda mozemo da uzmemo tu vredost name u html-u 
  get selectedUser(){
    //find fja prihvata fju a ta fja receive-uje input 
    //dinamicki izracunavamo selektovanog user-a 
    // ! znaci da vrednost nece biti null tj undefined 
    // bez njega javlja gresku jer objekat moze biti undefined 
    // return this.users.find((user)=>user.id===this.selectedUserId)!;
    return this.users.find((user)=>user.id===this.selectedUserId);
  }

  //Ovde se preuzima emitovana vrednost iz user komponente 
  onSelectUser(id: string) {
    //console.log('User selected ' + id);
    this.selectedUserId = id;
  }

}
