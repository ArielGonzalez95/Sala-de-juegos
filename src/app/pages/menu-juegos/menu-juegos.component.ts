
import { Component,OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
import { Observable } from 'rxjs';

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

  
  

