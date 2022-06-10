
import { Component,OnInit } from '@angular/core';
import { USER_STORAGE_KEY } from '@shared/constants/constant';


@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit  {

  constructor() { }
  userActive =localStorage.getItem(USER_STORAGE_KEY);

  ngOnInit(): void {
    
  }
  
  
}

  
  

