// import { Component, computed, signal } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { input, output, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from './user.model';

// random selektor
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// pravi se type za user-a kako ne bi pisali tri @Input-a
// type User = {
//   id:string;
//   avatar:string;
//   name:string;
// }

// U Angular projektima vise se koristi interface 
// Mozemo napraviti i inteface 
// Ali je najbolje uvek dodati poseban model za to 
// interface User {
//   id:string;
//   avatar:string;
//   name:string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

//// Static
// export class UserComponent {

//   //Mozemo da dodamo property bez let var itd
//   //Sve property-je koje dodajemo su dostupni u .html fajlu
//   //selectedUser = DUMMY_USERS[randomIndex];
//   //selectedUser = signal(DUMMY_USERS[randomIndex]);

//   // get imagePath(){
//   //   return '../assets/users/' + this.selectedUser.avatar
//   // }

//   //Arrow function
//   //imagePath=computed(()=>'assets/users/'+this.selectedUser().avatar);

//   //Metoda
//   // onSelectuser(){
//   //   console.log('Clicked!');
//   //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   //   //this.selectedUser=DUMMY_USERS[randomIndex];
//   //   this.selectedUser.set(DUMMY_USERS[randomIndex])
//   // }
// }

// Dynamic without signals
export class UserComponent {
  // Settable property from outside
  // accept image of user as a imput
  // Nema inicijalnu vrednost jer je prima iz spoljasnjosti
  // Tako da eksplicitno stavljamo tip koji ce se primiti, i u ovom slucaju je string
  // i stavljamo ! sto znaci da ce value biti setovan from outside
  // i ovaj property mora da bude setovan (required:true)

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //Mozemo da napravimo jednog user-a umesto da imamo tri Input-a 
  // Ne kreiramo objekat ovde, vec samo tip koji ce se primiti 
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;

  //Evet object moze da se koristi kao generic type kako bi Angular znao kog je tipa ono sto stize sa klijenta 
  //@Output() select = new EventEmitter<string>();
  @Output() select = new EventEmitter();

  get imagePath() {
    //return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
    //console.log(DUMMY_USERS.find(user=>user.id===this.id));
  }
}

// //Dynamic with signals
// export class UserComponent {
//   // Signal input
//   // avatar kao input property
//   // mozemo dodati default value input<string>('')
//   // sta se prihvata definisemo u <>, generic type
//   // input je generic fja ts-a input<string>('');
//   id = input.required<string>();
//   avatar = input.required<string>();
//   name = input.required<string>();
//   select = output<string>();

//   // koristimo signal ali kada koristimo computed on se menja samo kada se avatar menja
//   imagePath = computed(() => {
//     return 'assets/users/' + this.avatar();
//   });

//   onSelectUser() {
//     //Ovo ne mozemo da uradimo jer se uzima vrednost spolja jer je input
//     //this.avatar.set();
//     this.select.emit(this.id());
//   }
// }
