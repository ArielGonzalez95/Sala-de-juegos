import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
import { createClient } from '@supabase/supabase-js';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';



@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent {
  turno = 0;
  color = [""];
  userActive =localStorage.getItem(USER_STORAGE_KEY);
  puntos: number| any;
  id: number | any;
  emailUsuario: string | any;
  userExist = false;
  juego: string|any;
  llamar:boolean = false;
  
constructor(private readonly router: Router){}

ngOnInit(): void {
 
  
}


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





 async comprobarGanador() {

    if (this.color[0] == this.color[1] && this.color[0] == this.color[2] && this.color[0]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    } 
    else if (this.color[3] == this.color[4] && this.color[3] == this.color[5] && this.color[3]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }
     else if (this.color[6] == this.color[7] && this.color[6] == this.color[8] && this.color[6]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }
    else if (this.color[0] == this.color[3] && this.color[0] == this.color[6] && this.color[0]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }
    else if (this.color[1] == this.color[4] && this.color[1] == this.color[7] && this.color[1]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }
    else if (this.color[2] == this.color[5] && this.color[2] == this.color[8] && this.color[2]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }
    else if (this.color[0] == this.color[4] && this.color[0] == this.color[8] && this.color[0]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }
    else if (this.color[2] == this.color[4] && this.color[2] == this.color[6] && this.color[2]) {
      alert("gano el jugador: "+ (this.turno % 2 ?'azul':'Rojo'));
      if(this.turno % 2 == 0){
        this.llamar=true;
      }
      
    }

    if(this.llamar == true){
      const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
        const user = supabase.auth.user()
        let { data: UsersGanadores, error } = await supabase
      .from('UsersGanadores')
      .select('*')
      
      const datos = UsersGanadores?.filter(i => i.user == user?.email);
      const data = datos?.filter(i => i.juego == 'Ta Te Ti');
          this.puntos = data?.map(i => i.puntos);
          this.id = data?.map(i => i.id);
          this.emailUsuario = data?.map(i =>i.user);

          if(this.puntos.length == 0){
            this.insertarNew();
           }else{
            
            this.UpdatePuntaje();
           }
           
    
    }
    
    
    
  }
 async limpiar(): Promise<void>{
   await window.location.reload();

  }


  async UpdatePuntaje(){
  
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const id = this.id;
    const puntos = parseInt(this.puntos);
    const puntosSumado = puntos + 1;
    console.log('entro a update');
    
      const { data, error } = await supabase
    .from('UsersGanadores')
    .update({ puntos:puntosSumado })
    .eq('id',id)
    this.limpiar();
   
  }

  async insertarNew(){
    console.log('entro a create');
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user();
    const juego = "Ta Te Ti";
    const { data, error } = await supabase
    .from('UsersGanadores')
    .insert([
      { user: user?.email, puntos:'1', juego: juego },
    ])
    this.limpiar();
  }
  
}