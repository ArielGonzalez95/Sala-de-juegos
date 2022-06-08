import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {
  @Input() view :boolean = true;
  @Input()viewAhocado : boolean =false;
  @Input()viewAdivina :boolean = false;
  @Input()viewTateti :boolean =false;
   

  constructor() { }
  ngOnInit(): void {  
  }
  public AdivinaElNumeroIsClick() {
    this.viewAdivina = true;
    this.viewAhocado = false;
    this.viewTateti= false;
    this.view = false
  }

  public ahorcadoIsClick() {
    this.viewAhocado = true; 
    this.view = false;
    this.viewAdivina = false;
    this.viewTateti = false;
  }
  public tatetiIsClick() {
    this.viewTateti = true;
    this.view = false;
    this.viewAdivina = false;
    this.viewAhocado = false;
    
  }
 
  
  
  
}
