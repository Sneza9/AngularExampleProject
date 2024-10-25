import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

//floor 
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //Mozemo da dodamo property bez let var itd 
  //Sve property-je koje dodajemo su dostupni u .html fajlu 
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath(){
    return '../assets/users/' + this.selectedUser.avatar
  }

  //Metoda 
  onSelectuser(){
    console.log('Clicked!'); 
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser=DUMMY_USERS[randomIndex];
  }
}
