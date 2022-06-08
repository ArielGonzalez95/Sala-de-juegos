import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuJuegosComponent } from '../menu-juegos/menu-juegos.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor() { }
  quiensoy : boolean = false;
  ajugar: boolean = false;
  ngOnInit(): void {
  }
  
  QuienSoy(){
    this.quiensoy = true;
    this.ajugar = false;
  }
  MenuJuegos(){
  this.ajugar = true;
  this.quiensoy = false;
  }
}
