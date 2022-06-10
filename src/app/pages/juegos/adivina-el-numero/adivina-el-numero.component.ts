import { Component, OnInit } from '@angular/core';
import { USER_STORAGE_KEY } from '@shared/constants/constant';


@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  userActive =localStorage.getItem(USER_STORAGE_KEY);
  valor : boolean = true;
  valorInput : string = "";
  recibidoDePadre:  string = "";
  mensajeAmodal : string ="";  
  
  constructor() { }

  ngOnInit(): void {
  }
  
  public compararNumeros() {
    var numeroInput = parseInt(this.valorInput);
    var max = 100; 
    var min = 1; 
    var numerom = Math.random()*(max-min) + min; 
    numerom = Math.round(numerom);
      console.log(numerom);

    if(numeroInput == numerom){
      this.recibidoDePadre = "HAS GANADO"; 
      this.mensajeAmodal = this.recibidoDePadre;
     }
      
    
   if(numeroInput == 0){
     this.recibidoDePadre = "INGRESA UN NUMERO MAYOR A 0";
    
     this.mensajeAmodal = this.recibidoDePadre; 
      }
    
   if(numeroInput < numerom){
     this.recibidoDePadre = "EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
     this.valor = true;
     this.mensajeAmodal = this.recibidoDePadre; 
      }
     
   if(numeroInput > numerom){
     this.recibidoDePadre = "EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
     this.valor = true;
     this.mensajeAmodal = this.recibidoDePadre; 
  
        }
   }

  limpiar(){
    
    this.valorInput = "";
}
}
