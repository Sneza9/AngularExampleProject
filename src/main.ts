import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

//Ovde treba da imamo samo jednu glavnu komponentu koja u njenom .ts fajlu poziva ostale 

//Moze i bez catch za error - prikazuje komponentu svakako 
bootstrapApplication(AppComponent).catch((err) => console.error(err));

//bootstrapApplication(HeaderComponent).catch((err)=>console.error(err));
