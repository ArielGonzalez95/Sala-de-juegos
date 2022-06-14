import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_STORAGE_KEY } from '@shared/constants/constant';


@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  valor: boolean = true;
  valorInput: string = "";
  mensajeAmodal: string = "";
  numeroSecreto = this.numAleatorio(0, 100)
  numerosUsados: any =[];



  constructor(private readonly router: Router) { }


  numAleatorio(a: any, b: any) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }
  ngOnInit(): void {
    
  }

  public compararNumeros() {
    var numeroInput = 0;

    if (!/[^a-zA-Z]/.test(this.valorInput)) {
      var numeroInput = parseInt(this.valorInput);
     
        var numerom = this.numeroSecreto;
        numerom = Math.trunc(numerom);
        console.log(numerom);
        this.numerosUsados.push(numeroInput+",");
        this.mostrarNumeros();

        if (numeroInput == numerom) {
          this.mensajeAmodal = "HAS GANADO";
        }


        if (numeroInput == 0) {
          this.mensajeAmodal = "INGRESA UN NUMERO MAYOR A 0";

        }

        if (numeroInput < numerom) {
          this.mensajeAmodal = "EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
          this.valor = true;
        }

        if (numeroInput > numerom) {
          this.mensajeAmodal = "EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
          this.valor = true;
        } 


      }else {
        alert("solo numeros");
      }
    
  }

  mostrarNumeros(){
    this.numerosUsados
  }

  limpiar() {

    this.valorInput = "";
  }
}


