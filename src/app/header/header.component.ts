import { Component } from "@angular/core";

@Component({ 
    //at least two words 
    selector: 'app-header', 
    //module-based ili standalone komponente 
    standalone: true,
    //relativna putanja 
    templateUrl: './header.component.html',
    //Moze da ima array stajlova 
    styleUrl: './header.component.css'
}) 

//Potrebna nam je klasa IdentifierJob, za header komponentu je za sada empty 
export class HeaderComponent {} 