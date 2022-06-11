import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';



@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent {
  turno = 0;
  color = [""];
  

  posision1() {
    this.turno++;
    this.color[0] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(1);
  }
  posision2() {
    this.turno++;
    this.color[1] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(2);
  }
  posision3() {
    this.turno++;
    this.color[2] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(3);
  }
  posision4() {
    this.turno++;
    this.color[3] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(4);
  }
  posision5() {
    this.turno++;
    this.color[4] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(5);
  }
  posision6() {
    this.turno++;
    this.color[5] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(6);
  }
  posision7() {
    this.turno++;
    this.color[6] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(7);
  }
  posision8() {
    this.turno++;
    this.color[7] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(8);
  }
  posision9() {
    this.turno++;
    this.color[8] = this.turno % 2 ? 'blue' : 'red';
    this.comprobarGanador();
    console.log(9);
  }





  comprobarGanador() {

    if (this.color[0] == this.color[1] && this.color[0] == this.color[2] && this.color[0]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    } 
    else if (this.color[3] == this.color[4] && this.color[3] == this.color[5] && this.color[3]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
     else if (this.color[6] == this.color[7] && this.color[6] == this.color[8] && this.color[6]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
    else if (this.color[0] == this.color[3] && this.color[0] == this.color[6] && this.color[0]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
    else if (this.color[1] == this.color[4] && this.color[1] == this.color[7] && this.color[1]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
    else if (this.color[2] == this.color[5] && this.color[2] == this.color[8] && this.color[2]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
    else if (this.color[0] == this.color[4] && this.color[0] == this.color[8] && this.color[0]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
    else if (this.color[2] == this.color[4] && this.color[2] == this.color[6] && this.color[2]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
    }
    
  }

}