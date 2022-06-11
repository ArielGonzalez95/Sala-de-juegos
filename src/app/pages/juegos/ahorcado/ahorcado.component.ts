import { LiteralMapExpr, ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { USER_STORAGE_KEY } from '@shared/constants/constant';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  userActive =localStorage.getItem(USER_STORAGE_KEY);
  

  ngOnInit(): void {
  }
    @Input()viewAhorcado = false; 
    @Input() volver : boolean = false;
    title = "Ahorcado";
    palabra:any; 
    llamarPalabra: any = this.llamar(); 
    llamar(){
     var a= prompt("Ingresa la palabra oculta:");
      while(true){
        if(a == ""){
          a = prompt("Ingrese almenos una palabra");
        }else if(Number(a)){
          a = prompt("Ingrese una palabra sin numeros");
        }else{
          this.palabra = a;
          break;
        }

      }
     
    }
    
    a = true;
    palabraOculta: any = "";
    intentos = 0;
    gano = false;
    perdio = false;
    letras = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "ñ",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    constructor() {
      this.palabraOculta = "_ ".repeat(this.palabra.length);
    }

    comprobar(letra: any) {
      this.existeLetra(letra);
      const palabraOcultaArreglo = this.palabraOculta.split(" ");
  
      for (let i = 0; i <= this.palabra.length; i++) {
        if (this.palabra[i] === letra) {
          palabraOcultaArreglo[i] = letra;
        }
      }
      this.palabraOculta = palabraOcultaArreglo.join(" ");
      this.verificaGanador();
    }


    verificaGanador() {
      const palabraArr = this.palabraOculta.split(" ");
      const palabraEvaluar = palabraArr.join("");
  
      if (palabraEvaluar === this.palabra) {
        this.gano = true;
        console.log("Usuario GANO");
      }
      if (this.intentos === 9) {
        this.perdio = true;
        console.log("Usuario perdio");
      }
    }

  
    existeLetra(letra: any) {
      if (this.palabra.indexOf(letra) >= 0) {
        console.log("La letra existe" + letra);
      } else {
        this.intentos++;
      }
    }

    Volver(){
      this.volver = true;
      this.viewAhorcado = false;
    }
}
