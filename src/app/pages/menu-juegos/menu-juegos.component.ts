
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_STORAGE_KEY } from '@shared/constants/constant';


@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit  {

  constructor(private readonly router: Router) { }
  userActive =localStorage.getItem(USER_STORAGE_KEY);

  ngOnInit(): void {
    if(this.userActive == null){
      this.router.navigate(['/sign-in']);
    }
  }
  
  
}

  
  

