import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.services';
import { environment } from '@env/environment';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
import { createClient } from '@supabase/supabase-js';
import { equal } from 'assert';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  valor: boolean = true;
  valorInput: string = "";
  mensaje: string = "";
  numeroSecreto = this.numAleatorio(0, 100)
  numerosUsados: any = [];
  contador = 0;
  puntos: object| any;
  id: number | any;
  emailUsuario: string | any;
  userExist = false;
  juego: string|any;
 


  constructor() { }


  numAleatorio(a: any, b: any) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }
  ngOnInit(): void {
    
  }
  
  async obtenerPuntaje(){
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user()
    let { data: UsersGanadores, error } = await supabase
  .from('UsersGanadores')
  .select('*')
  
  const datos = UsersGanadores?.filter(i => i.user == user?.email);
  const data = datos?.filter(i => i.juego == 'Adivina el numero');
      this.puntos = data?.map(i => i.puntos);
      this.id = data?.map(i => i.id);
      this.emailUsuario = data?.map(i =>i.user);
      const dat = this.puntos[0];
      
  }

  public compararNumeros() {
    
    var numeroInput = 0;
    var numeroInput = parseInt(this.valorInput);
    var numerom = this.numeroSecreto;
    numerom = Math.trunc(numerom);
    console.log(numerom)

    if (this.numerosUsados.includes(numeroInput)) {

      this.mensaje = "EL NUMERO YA FUE INGRESADO"

    } else {

      this.numerosUsados.push(numeroInput);
      this.numerosUsados.push(",")

      this.mostrarNumeros();
      this.obtenerPuntaje();
      if (numeroInput == numerom) {
        this.mensaje = "HAS GANADO, 1 punto extra!";
        
        this.puntos;
        console.log(this.puntos);
         if(this.puntos.length == 0){
          this.insertarNew();
         }else{
          
          this.UpdatePuntaje();
         }
      

      }

      if (numeroInput == 0) {
        this.mensaje = "INGRESA UN NUMERO MAYOR A 0";

      }

      if (numeroInput < numerom) {
        this.mensaje = "EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
        this.valor = true;
      }

      if (numeroInput > numerom) {
        this.mensaje = "EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO";
        this.valor = true;
      }
      this.contador++;
      
      if (this.contador == 10) {
        this.mensaje = "EL NUMERO SECRETO ERA " + numerom;
      }
    }
    

  }
  

   mostrarNumeros() {
    this.numerosUsados
  }

  limpiar() {

    this.valorInput = "";
  }


 async UpdatePuntaje(){
  
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const id = this.id;
    const puntos = parseInt(this.puntos);
    const puntosSumado = puntos + 1;
    console.log(puntosSumado);
    console.log(id)
      const { data, error } = await supabase
    .from('UsersGanadores')
    .update({ puntos:puntosSumado })
    .eq('id',id)
    
   
  }

  async insertarNew(){

    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user();
    const juego = "Adivina el numero";
    const { data, error } = await supabase
    .from('UsersGanadores')
    .insert([
      { user: user?.email, puntos:'1', juego: juego },
    ])
  }

  

}


