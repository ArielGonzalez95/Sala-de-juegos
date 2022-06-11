import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  numeroSecreto = this.numAleatorio(0,100)

  

  constructor(private readonly router: Router) { }

  
  numAleatorio(a:any,b:any)
  {
      return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }
  ngOnInit(): void {
    if (this.userActive == null) {
      this.router.navigate(['/sign-in']);
    }
  }
  
  public compararNumeros() {
    var numeroInput = parseInt(this.valorInput);
    var numerom = this.numeroSecreto;
    numerom = Math.trunc(numerom);
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
