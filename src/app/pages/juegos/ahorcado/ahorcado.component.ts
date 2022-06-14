import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
import { HostListener } from '@angular/core';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  userActive = localStorage.getItem(USER_STORAGE_KEY);


  ngOnInit(): void {

  }
  @Input() viewAhorcado = false;
  @Input() volver: boolean = false;
  title = "Ahorcado";
  palabra: any;
  llamarPalabra: any = this.llamar();
  ingresoTeclado = "";
  letrasUsadas: any = [];

  llamar() {

   
      var a = prompt("Ingresa la palabra oculta:");

      while (true) {
        if (a == "") {
          a = prompt("Ingrese almenos una palabra");
        } else if (Number(a)) {
          a = prompt("Ingrese una palabra sin numeros");
        } else if ((/[^a-zA-Z]/.test(a!))) {
          a = prompt("Ingrese una palabra sin numeros");
        } else if (a == null) {
          this.cargarPagina();
          break;
        } else {
          this.palabra = a;
          break;
        }
      }
  }
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

  constructor(private readonly router: Router) {
    this.palabraOculta = "_ ".repeat(this.palabra.length);

  }


  cargarPagina() {
    this.router.navigate(['/menu-juegos']);
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

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this.ingresoTeclado = ev.key;
      if ((this.ingresoTeclado != "") && (!/[^a-zA-Z]/.test(this.ingresoTeclado)) && (this.ingresoTeclado.length == 1)) {
        this.comprobar(this.ingresoTeclado);
        this.letrasUsadas.push(this.ingresoTeclado+",");
      }
    }

}

